import React from 'react';
export { };


const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="logo" style={{ backgroundColor: '#362222', color: 'white' }}><h1 style={{ textAlign: 'center', fontFamily: 'intial', fontSize: "50px" }}>--Recipe Tracker--</h1></div>
            <ul style={{ color: "#C69B7B", fontFamily: "intial" }}>
                <li style={{ fontSize: "20px" }}><a href="/">Home 🏠</a></li>
                <li style={{ fontSize: "20px" }}><a href="/recipes">Recipes 🍜</a></li>
                <li style={{ fontSize: "20px" }}><a href="/about">About 📃</a></li>
                <li style={{ fontSize: "20px" }}><a href="/contact">Contact 📞 </a></li>
            </ul>
        </nav>
    );
};

export default Navbar;