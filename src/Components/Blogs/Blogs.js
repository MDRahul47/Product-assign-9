import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='question'>
            <h1>What is Contex API ?</h1>
            <p>The React Context API is a way for a React app to effectively produce <br />
                global variables that can be passed around. This is the alternative to <br />
                "prop drilling" or moving props from grandparent to child to parent, <br />
                and so on. Context is also touted as an easier, lighter approach to state <br />
                management using Redux.</p>

            <h1>What is inline-block ?</h1>
            <p>inline-block brought a new way to create side by side boxes that collapse <br />
                and wrap properly depending on the available space in the containing element. <br />
                It makes layouts that were previously accomplished with floats easier to create. <br />
                No need to clear floats anymore.</p>
        </div>
    );
};

export default Blogs;