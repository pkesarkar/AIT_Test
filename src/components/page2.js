import React from 'react';
 
const page2 = () => {
    return (
       <div>
          <h1 align="center">Page2</h1>
           <p align="center"> Showing contents from page2 body </p>
           <li> <a href="./page3"> <p align="center">Next Page</p> </a> </li>
           <li> <a href="./"> <p align="center">Previous Page</p> </a> </li>
       </div>
    );
}
 
export default page2;