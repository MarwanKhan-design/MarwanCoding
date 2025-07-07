// Contact.jsx
export default function Contact() {
  return (
    <section className="bg-indigo-100 py-16 px-6 text-center text-gray-800">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p>
        Email:{" "}
        <a
          href="mailto:marwanpsh@gmail.com"
          className="underline text-indigo-600"
        >
          marwanpsh@gmail.com
        </a>
      </p>
      <p>Phone: 0336 9302382</p>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/MarwanKhan-design"
          className="underline text-indigo-600"
          target="_blank"
        >
          MarwanKhan-design
        </a>
      </p>
    </section>
  );
}
