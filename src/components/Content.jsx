import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Link } from '@mui/material';
import { Email, WhatsApp } from '@mui/icons-material';

const UnorderedList = styled('ul')({
  listStyle: 'disc',
  color: 'black',
});


export default function Content() {
  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
      <Typography
        variant='h4'
        sx={{ my: 5, mx: 2 }}
        color="text."
        align="start"
        id="Information">
        Information
      </Typography>
      <Typography
        sx={{ my: 0.1, mx: 2 }}
        color="text."
        align="start">
        The API is an innovative application designed to streamline user registration and tracking while providing a secure and efficient platform for Bitcoin transfers. Built on blockchain technology, this application leverages a decentralized network to ensure transaction confidentiality and integrity.<br></br>

        With the API users can create personal accounts and securely access them through a registration process. The application collects and stores relevant user information such as usernames, email addresses, and private keys for their Bitcoin wallets.<br></br>

        Once registered, users can easily initiate Bitcoin transfers. The application allows users to input the desired amount of Bitcoin and the recipient's address. Through blockchain technology, transactions are verified and recorded immutably, ensuring transparency and security.<br></br>

        Furthermore, the API offers transaction logging and tracking features. Users can access a detailed history of all their transactions, enabling them to trace and verify their past operations. <br></br>

        In summary, the Api provides a user-friendly interface for registering and logging users, enabling seamless Bitcoin transfers. It ensures privacy and security through blockchain technology and empowers users with transaction tracking capabilities.
      </Typography>
      </AppBar>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
      <Typography
        variant='h4'
        sx={{ my: 5, mx: 2 }}
        color="text."
        align="start"
        id="Suported-Versions">
        Suported Versions
      </Typography>
      <Typography
        sx={{ my: 0.1, mx: 2 }}
        color="text."
        align="start">
        We strive to provide the best possible support for our users, which is why we maintain compatibility with multiple versions of our API. Below is a list of the currently supported versions along with their respective features and capabilities.
        <ol>
          <li> Version 1.0: </li>
          <UnorderedList>
            <li>User login: Authenticate users and generate access tokens for secure API interactions.</li>
            <li>User information retrieval: Retrieve detailed information about a user, such as their profile data.</li>
            <li>Password modification: Allow users to update their account passwords securely.</li>
            <li>User creation: Create new user accounts with specified details.</li>
            <li>Transfer functionality: Enable users to initiate and process fund transfers between accounts.</li>
          </UnorderedList>
          <li> Version 2.0 (upcoming release): </li>
          <UnorderedList>
            <li>Enhanced security measures: Implement additional security protocols to safeguard user data and prevent unauthorized access.</li>
            <li>Extended user information: Provide more comprehensive user profile data for a richer user experience.</li>
            <li>Advanced transaction features: Introduce advanced transaction options, including batch transfers and transaction history retrieval.</li>
            <li>Transfer functionality: Enable users to initiate and process fund transfers between accounts.</li>
          </UnorderedList>
        </ol>
        Please note that while we continue to support previous versions of our API, we strongly recommend migrating to the latest version to take advantage of the latest enhancements and security updates. Upgrading to newer versions ensures optimal functionality and better protection for your users' data.<br></br><br></br>
        For detailed information on each version's endpoints, request/response formats, and authentication methods, please refer to the corresponding documentation sections. If you have any questions or require assistance, our support team is here to help.<br></br><br></br>

        Thank you for choosing our API, and we look forward to assisting you in building exceptional applications with our powerful features and functionalities! 
       </Typography>
      </AppBar>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
      <Typography
        variant='h4'
        sx={{ my: 5, mx: 2 }}
        color="text."
        align="start"
        id="Technology">
        Technology
      </Typography>
      <Typography
        sx={{ my: 0.1, mx: 2 }}
        color="text."
        align="start">
          Our API is built using cutting-edge technologies to provide a secure and efficient platform for seamless integration with your applications. Here are the key technologies employed in our REST API:
          <ol>
          <li>RESTful Architecture:</li>
            Our API follows the principles of Representational State Transfer (REST), which allows for a stateless and scalable design. This architectural style enables you to interact with our API using standard HTTP methods and resource-oriented URLs.

          <li>Programming Language:</li>
            We have developed our API using a robust and widely adopted programming language. This language offers excellent performance, extensive community support, and a rich ecosystem of libraries and frameworks.

          <li>Security Libraries:</li>
            To ensure the utmost security of your users' data, we have integrated industry-standard security libraries into our API. These libraries employ robust encryption algorithms, authentication mechanisms, and secure transmission protocols to safeguard sensitive information.

          <li>Authentication and Authorization:</li>
            Our API employs secure authentication and authorization mechanisms to protect access to user accounts and prevent unauthorized actions. We utilize widely accepted authentication protocols such as OAuth or JSON Web Tokens (JWT) to ensure secure user authentication and authorized access to protected resources.

          <li>Data Persistence:</li>
            We leverage a reliable and scalable database system to store and manage user data. Our database solution offers high-performance data storage, efficient querying capabilities, and data integrity measures to guarantee the reliability of your applications.

          <li>Documentation:</li>
            We provide comprehensive documentation that outlines the API's endpoints, request/response formats, and usage guidelines. Our documentation is designed to facilitate easy integration and streamline the development process.
          </ol>
          By leveraging these technologies, we aim to deliver a robust and secure API that meets your application's requirements. If you have any questions or need assistance during the integration process, our dedicated support team is here to help.<br></br><br></br>

          Thank you for choosing our API, and we are excited to empower your applications with our advanced technology stack! 
       </Typography>
      </AppBar>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
      <Typography
        variant='h4'
        sx={{ my: 5, mx: 2 }}
        color="text."
        align="start"
        id="Installing-the-app">
        Installing the app
      </Typography>
      <Typography
        sx={{ my: 0.1, mx: 2 }}
        color="text."
        align="start">
          To install with our API, follow the simple steps below:
          <ol>
            <li>Clone the Repository:</li>
            Use the following command to clone the repository onto your machine:
            <Box
              sx={{
                backgroundColor: '#010101',
                padding: '1rem',
                borderRadius: '4px',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                fontFamily: 'Consolas, monospace',
                fontSize: '14px',
                lineHeight: '1.5',
                overflowX: 'auto',
              }}
            >
              <Typography 
                fontFamily= 'Courier New, monospace'
                color= 'white'
              >
                git clone "repository URL" <br></br>
              </Typography> 
            </Box> 
            <li>Install Dependencies:</li>
            Navigate to the cloned repository's directory using the terminal or command prompt, and run the following command to install the required dependencies:
            <Box
              sx={{
                backgroundColor: '#010101',
                padding: '1rem',
                borderRadius: '4px',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                fontFamily: 'Consolas, monospace',
                fontSize: '14px',
                lineHeight: '1.5',
                overflowX: 'auto',
              }}
            >
              <Typography 
                fontFamily= 'Courier New, monospace'
                color= 'white'
              >
                npm install <br></br>
              </Typography> 
            </Box>    
            </ol>
            That's all for the installation process, you can learn how to run the app in the section <Link href="#Opening-the-app" underline="hover" color="inherit" fontWeight="bold">Opening the app</Link>.
       </Typography>
      </AppBar>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
      <Typography
        variant='h4'
        sx={{ my: 5, mx: 2 }}
        color="text."
        align="start"
        id="Opening-the-app">
        Opening the app
      </Typography>
      <Typography
        sx={{ my: 0.1, mx: 2 }}
        color="text."
        align="start">
        To get started with our API, follow the simple steps below to install and run it on your local machine:

        <ol>
          <li>Start the API Server:</li>
              Once the installation of dependencies is complete, start the API server by running the following command:
              <Box
                sx={{
                  backgroundColor: '#010101',
                  padding: '1rem',
                  borderRadius: '4px',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                  fontFamily: 'Consolas, monospace',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  overflowX: 'auto',
                }}
              >
                <Typography 
                  fontFamily= 'Courier New, monospace'
                  color= 'white'
                >
                  npm start <br></br>
                </Typography> 
              </Box>
              <li>Access the API:</li>
            The API server will start running locally on a specified port (usually port 3000). You can access the API using tools like cURL, Postman, or by making HTTP requests directly from your application.<br></br>

            Example:
            <Box
              sx={{
                backgroundColor: '#010101',
                padding: '1rem',
                borderRadius: '4px',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                fontFamily: 'Consolas, monospace',
                fontSize: '14px',
                lineHeight: '1.5',
                overflowX: 'auto',
              }}
            >
              <Typography 
                fontFamily= 'Courier New, monospace'
                color= 'white'
              >
                GET http://localhost:3000/api/user/123
              </Typography> 
            </Box>
            <li>Explore the Documentation:</li>
            For detailed information on the available endpoints, request/response formats, and authentication methods, refer to our comprehensive API documentation. The documentation will provide you with all the necessary details to integrate the API seamlessly into your application.<br></br>
        </ol> 
        That's it! You have successfully installed and started our API on your local machine. Now you can begin utilizing its features and building powerful applications. If you encounter any issues or have any questions, please don't hesitate to reach out to our support team for assistance.<br></br><br></br>

        Happy coding with our API!
       </Typography>
      </AppBar>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
      <Typography
        variant='h4'
        sx={{ my: 5, mx: 2 }}
        color="text."
        align="start"
        id="Functions">
        Functions
      </Typography>
      <Typography
        sx={{ my: 0.1, mx: 2 }}
        color="text."
        align="start">
        These are the current functions/endpoints of our API:
        <Box
              sx={{
                backgroundColor: '#010101',
                padding: '1rem',
                borderRadius: '4px',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                fontFamily: 'Consolas, monospace',
                fontSize: '14px',
                lineHeight: '1.5',
                overflowX: 'auto',
              }}
            >
              <Typography>
                <Box component="span" sx={{ color: 'green' }}>POST </Box>
                <Box component="span" sx={{ color: 'white' }}>/users/login</Box> <br></br>
                <Box component="span" sx={{ color: 'blue' }}>GET </Box>
                <Box component="span" sx={{ color: 'white' }}>/users/username</Box> <br></br>
                <Box component="span" sx={{ color: 'orange' }}>PUT </Box>
                <Box component="span" sx={{ color: 'white' }}>/users/update</Box> <br></br>
                <Box component="span" sx={{ color: 'green' }}>POST </Box>
                <Box component="span" sx={{ color: 'white' }}>/users/transfer</Box> <br></br>
                <Box component="span" sx={{ color: 'green' }}>POST </Box>
                <Box component="span" sx={{ color: 'white' }}>/users/new</Box> <br></br>
              </Typography>
            </Box>
            To see more information about this functions/endpoints, please go to the <Link href="/docs" underline="hover" color="inherit" fontWeight="bold">Documentation</Link> section.

       </Typography>

      </AppBar>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
      <Typography
        variant='h4'
        sx={{ my: 5, mx: 2 }}
        color="text."
        align="start"
        id="Suport">
        Suport - Frequently Asked Questions
      </Typography>
      <Typography
        sx={{ my: 0.1, mx: 2 }}
        color="text."
        align="start">
        Here are answers to some commonly asked questions that may help you troubleshoot and resolve common issues related to our API:<br></br><br></br>

        <ol>
          <li><span style={{ fontWeight: 'bold' }}>Q:</span> How do I authenticate requests to the API?</li>
          <span style={{ fontWeight: 'bold' }}>A:</span> To authenticate requests, you need to include an authentication token in the request headers. You can obtain the token by using the login endpoint, which returns an access token upon successful authentication. Include this token in subsequent requests by adding an "Authorization" header with the value "Bearer [access_token]".
          <li><span style={{ fontWeight: 'bold' }}>Q:</span> What is the rate limit for API requests?</li>
          <span style={{ fontWeight: 'bold' }}>A:</span> We have a rate limit in place to ensure fair usage and maintain the stability of the API. The rate limit is typically defined in terms of the number of requests per minute or hour. If you exceed the rate limit, you will receive a "429 Too Many Requests" response. Please refer to the API documentation for details on the specific rate limit for your account or application.
          <li><span style={{ fontWeight: 'bold' }}>Q:</span> How can I handle errors returned by the API?</li>
          <span style={{ fontWeight: 'bold' }}>A:</span> The API follows standard HTTP status codes to indicate the success or failure of a request. Successful requests return a 2xx status code, while errors are indicated by 4xx or 5xx status codes. Additionally, error responses include an error message in the response body, which provides more details about the encountered issue. Refer to the API documentation for a list of possible error codes and their meanings.
          <li><span style={{ fontWeight: 'bold' }}>Q:</span> Can I test the API endpoints without making actual changes to data?</li>
          <span style={{ fontWeight: 'bold' }}>A:</span> Yes, we provide a sandbox environment where you can test API endpoints without affecting actual user data. The sandbox environment mimics the behavior of the production environment but uses test data. This allows you to experiment and validate your integration before deploying it in a live environment. Refer to the API documentation for information on how to access and utilize the sandbox environment.
          <li><span style={{ fontWeight: 'bold' }}>Q:</span> How can I handle pagination when retrieving large sets of data?</li>
          <span style={{ fontWeight: 'bold' }}>A:</span> Some API endpoints that return lists of data may implement pagination to manage large result sets. The response will include pagination information such as the total number of items and the number of items per page. You can use query parameters to specify the page number and the number of items per page. Additionally, the response may contain URLs or pagination tokens for navigating through the result pages. Refer to the API documentation for specific details on pagination for each endpoint.
        </ol><br></br>
        We hope these answers address some of your common queries and help you troubleshoot any issues you may encounter while using our API. If you have any further questions or need additional assistance, please don't hesitate to reach out to our dedicated support team.<br></br><br></br>

        We're here to help you make the most of our API and ensure a smooth integration process.

       </Typography>
      </AppBar>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
      <Typography
        variant='h4'
        sx={{ my: 5, mx: 2 }}
        color="text."
        align="start"
        id="Contact-us">
        Contact us
      </Typography>
        <Typography
          sx={{ my: 0.1, mx: 2 }}
          color="text."
          align="start"
          fontWeight="bold"
          id="Contact-us">
            <IconButton href="mailto:soporte@example.com">
            <Email color="primary" />
            </IconButton>
            Contact suport team

            <IconButton href="https://wa.me/1234567890">
              <WhatsApp style={{ color: 'green' }} />
            </IconButton> 
            Whatsapp suport team

       </Typography>
      </AppBar>
    </Paper>
  );
}