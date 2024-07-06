import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-center bg-gradient-defang">
      <h1 className="text-4xl font-bold text-white">Next.js &times; Defang</h1>
      <section className="mt-10 text-center text-white">
        <h2 className="text-3xl font-semibold">About Vishal Kumar</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          I am Vishal Kumar, a Bachelor of Technology graduate in Electronics and Communication Engineering from the National Institute of Technology, Silchar. With hands-on experience in developing machine learning algorithms and utilizing different neural networks, I have interned at IIT Indore, working on Covid detection using various neural networks. I have worked on several projects including a chatbot for answering bank queries and a movie recommender system based on collaborative filters. I have completed certifications in Machine Learning from MIT-Edx, Deep Learning with TensorFlow from IBM, and Natural Language Processing with Deep Learning from Stanford. Currently, I am participating in the Microsoft AI Challenge to enhance my knowledge on deploying models on Azure.
        </p>
      </section>
    </main>
  );
