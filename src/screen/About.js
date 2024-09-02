import React from 'react'
import Nav from '../component/Nav'
import Footer from '../component/Footer'
import '../index.css'


function About() {
  return (
    <>
    <Nav/>
          <div id='about' className="py-12 mx-12">
            <div className="bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-4xl font-bold mb-6">About JK Library</h1>
              <p className="text-lg mb-4">
          Welcome to JK Library, where learning meets accessibility. Our library provides an extensive collection of self-study resources tailored to support individuals in their educational journeys. By leveraging digital content, we bring knowledge right to your fingertips, ensuring that learning is both convenient and enriching.
               </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <div className="bg-gray-100 p-4 border-l-4 border-gray-800">
            <p>
              At JK Library, our mission is to democratize education by offering free and accessible self-study materials to learners everywhere. We believe in the power of knowledge and strive to empower individuals through education, enabling them to reach their full potential regardless of geographical or financial barriers.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our History</h2>
          <p>
            Founded in 2024, JK Library started with a vision to create a digital space where anyone could access quality learning materials. What began as a small collection of curated content has grown into a comprehensive digital library, offering resources across various subjects, including science, technology, arts, and humanities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <ul className="list-disc list-inside">
            <li><strong>Digital Collections:</strong> Explore a vast array of articles, tutorials, and e-books that cover a wide range of topics.</li>
            <li><strong>Interactive Learning:</strong> Engage with interactive content designed to deepen understanding and retention.</li>
            <li><strong>Community Support:</strong> Connect with fellow learners through forums and discussion groups, where you can share insights and seek guidance.</li>
            <li><strong>Personalized Learning Paths:</strong> Tailor your study experience with custom learning paths that fit your educational goals.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Community Engagement</h2>
          <div className="bg-gray-100 p-4 border-l-4 border-gray-800">
            <p>
              We believe in the power of community and strive to create a supportive environment where learners can thrive. JK Library regularly hosts webinars, workshops, and online events to foster collaboration and share knowledge.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Future</h2>
          <div className="bg-gray-100 p-4 border-l-4 border-gray-800">
            <p>
              Looking ahead, JK Library is committed to continuous improvement and innovation. We are exploring new ways to enhance our digital platform, including the integration of advanced technologies like AI-driven recommendations and virtual reality learning environments.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions, suggestions, or need further assistance, we would love to hear from you:
          </p>
          <p>Email: <a href="mailto:info@jklibrary.com" className="text-blue-600">info@jklibrary.com</a></p>
          <p>Phone: (+91) 94721 74783</p>
          <p>Address: PILLAR NO 62, CHOURASIA MARKET, Bailey Rd, Samanpura, Raja Bazar, Indrapuri, Patna, Bihar 800014</p>
        </section>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default About
