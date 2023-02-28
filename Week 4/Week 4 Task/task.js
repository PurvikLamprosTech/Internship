const https = require('https');
const nodemailer = require('nodemailer');
const fs = require('fs');
// const html = require('html');
const html = require('html-entities');

// Read the email addresses from the emails.txt file
const emails = fs.readFileSync('emails.txt', 'utf-8').toString().split('\n');

// Make an HTTP request to the news API to get the latest news
const options = {
  hostname: 'inshortsapi.vercel.app',
  path: '/news?category=technology',
  method: 'GET',
  headers: {
    'User-Agent': 'Chrome/58.0.3029.110'
  }
};

https.get(options, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data = data + chunk;
  });

  response.on('end', () => {
    try {
      // Parse the JSON response from the API and extract the news content
      const news = JSON.parse(data);
      let content = `<h1><center>Tech News</center></h1>
      <table style="border-collapse: collapse; border: 2px solid black;">
            <thead style="background-color: rgb(157, 219, 231)">
              <tr style="border-collapse: collapse; border: 2px solid black;">
              <th style="border-collapse: collapse; border: 2px solid black">Author</th>
              <th style="border-collapse: collapse; border: 2px solid black">Title</th>
                <th style="border-collapse: collapse; border: 2px solid black">Description</th>
                <th style="border-collapse: collapse; border: 2px solid black">Date</th>
              </tr>
            </thead>
            <tbody style="background-color: rgb(215, 219, 198)">`;
      news.data.map((item) => {
       
        content += `<tr>
              <td style="border: 2px solid black; text-align: center">${item.author}</td>
              <td style="border: 2px solid black; text-align: center">${item.title}</td>
                          <td style="border: 2px solid black;">${item.content}<a href="${item.url}" target="_blank">Read More</a></td>
                          <td style="border: 2px solid black; text-align: center">${item.date}</td>
                    </tr>`;
 
      });
      content += `</tbody>
      </table><br>
      <footer style="text-align: center">Email by Nodejs program</footer>`
      
      // console.log(news.data);


      // //Configure the Nodemailer transporter with your email account details
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'captainwalter11@gmail.com',
          pass: 'erlkhotxqdlbzngz'
        }
      });

        let recipients = emails.join(', ');
        const message = {
          from: '"News" captainwalter11@gmail.com',
          to: recipients,
          subject: 'Latest Tech News',
          html: content
        };


        // Send the email using Nodemailer
        transporter.sendMail(message , (error, info) => {
          if (error) {
            console.log(`Error sending email to ${recipients}: ${error}`);
          } else {
            console.log(`Email sent successfully : ${info.response}`);
          }
        });

        // console.log(message.html);
    } catch (error) {
      console.log(`Error getting content from API: ${error}`);
    }
  });
}).on('error', (error) => {
  console.log(`Error getting news from API: ${error}`);
});