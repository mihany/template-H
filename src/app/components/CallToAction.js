import FAQhomepage from "@/app/components/FAQhomepage"
import Newsletter from "@/app/components/Newsletter";

export default function CallToAction() {
    const faqs = [
        {
            question: "What's the best thing about Switzerland?",
            answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            question: "What's the best thing about Egypt?",
            answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            question: "What's the best thing about USA?",
            answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            question: "What's the best thing about UK?",
            answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            question: "What's the best thing about Germany?",
            answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        // More questions...
        ]
    return (
        <>
            <FAQhomepage faqs={faqs} />
        
        {/* Floating Call-to-Action Box */}

        <div className="relative h-64 sm:h-56 md:h-72 mb-40 sm:mb-44 bg-secondary-green">
            <Newsletter />
        </div>

        </>
    );
  }