import React from 'react'
import Nav from '../component/Nav'
import Footer from '../component/Footer'
import '../index.css'


function Contact() {
  return (
      
      <div>
        <Nav/>
        <div id='contact' className="py-12 mx-12">
           <div className="bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Contact JK Library</h1>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {/* Contact Information */}
           <div>
             <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-lg mb-4">We'd love to hear from you! Whether you have questions, feedback, or need support, feel free to reach out.</p>
              <p className="text-lg mb-2"><strong>Email:</strong> <a href="mailto:896rohitkumar@gmail.com" className="text-blue-600">896rohitkumar@gmail.com</a></p>
              <p className="text-lg mb-2"><strong>Phone:</strong> (+91)94721 74783</p>
              <p className="text-lg mb-2"><strong>Address:</strong>PILLAR NO 62, CHOURASIA MARKET, Bailey Rd, Samanpura, Raja Bazar, Indrapuri, Patna, Bihar 800014</p>
            </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form className="space-y-4" action="https://formsubmit.co/shereali176@gmail.com" method="POST">
              <div>
                <label className="block text-lg mb-2" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name='name'
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-lg mb-2" htmlFor="email">Your Email</label>
             
                <input
                  type="email"
                  id="email"
                  name='email'
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-lg mb-2" htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name='text'
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your message"
                  rows="5"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
        <Footer/>
      </div>
  )
}

export default Contact
