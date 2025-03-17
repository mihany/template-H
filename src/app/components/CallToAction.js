import FAQhomepage from "../components/FAQhomepage"
import Newsletter from "../components/Newsletter";

export default function CallToAction() {
    const faqs = [
        {
            question: "Are Hoetzin bootcamps 100% online?",
            content: `
                <p class="text-lg/7 text-white/90">
                Yes, all of Hoetzin’s courses are 100% online and live, led by expert instructors and TAs. 
                You won’t be learning alone—our structured live sessions provide real-time support from mentors, career coaches, and program advisors. 
                <br/>
                Plus, you’ll connect with a community of ambitious students, growing and supporting each other throughout your journey.
                </p>
            `,
        },
        {
            question: "How long does the course take to complete?",
            content: `
                <p class="text-lg/7 text-white/90">
                Our bootcamps run for 3.5 to 7 months, depending on whether you choose a full-time or part-time schedule. 
                Since all sessions are live and instructor-led, the pace is fixed to ensure structured learning and support.
                </p>
            `,
        },
        {
            question: "What kind of support can I expect?",
            content: `
                <p class="text-lg/7 text-white/90">
                    At Hoetzin, we provide comprehensive support at every stage of your journey:
                </p>

                <h3 class="text-lg/7 text-white/90">1- During the Bootcamp:</h3>

                    <ul class="list-disc pl-9 space-y-2 text-lg/7 text-white/90">
                        <li>24/7 support from instructors, TAs, and peers</li>
                        <li>1:1 mentorship for guidance and accountability</li>
                        <li>Tech talks from industry professionals to expand your knowledge</li>
                    </ul>
                <h3 class="text-lg/7 text-white/90">2- After Graduation:</h3>
                    <ul class="list-disc pl-9 space-y-2 text-lg/7 text-white/90">
                        <li>Job landing assistance until you secure your first role</li>
                        <li>Resume reviews, mock interviews, and job search strategy</li>
                        <li>Career coaching and networking opportunities</li>
                    </ul>
                <h3 class="text-lg/7 text-white/90">3- Lifetime Support:</h3>
                    <ul class="list-disc pl-9 space-y-2 text-lg/7 text-white/90">
                        <li>Free access to updated course materials as our curriculum evolves every 3 months</li>
                        <li>Audit and refresh your skills anytime at no extra cost</li>
                    </ul>
                
            `,
        },
        {
            question: "How does the admission process work?",
            content: `
                <p class="text-lg/7 text-white/90">
                    Apply online in 10-15 minutes, meet with admissions team, take a skills survey, and secure your spot. Admissions are rolling, so apply early!
                </p>
            `,
        },
        {
            question: "What is the Hoetzin Job Assistance?",
            content: `
                <p class="text-lg/7 text-white/90">
                    The Hoetzin Career Center is dedicated to helping you land your first job with the support of our expert Career Mentors and Advisors. Our job assistance includes:
                </p>

                <ul class="list-disc pl-9 space-y-2 text-lg/7 text-white/90">
                    <li><span class="font-bold">Tailored Resume & CV Support</span> – Get personalized guidance to craft a job-winning resume that stands out.</li>
                    <li><span class="font-bold">Mock Interviews</span> – Practice both technical and behavioral interviews to sharpen your skills and build confidence.</li>
                    <li><span class="font-bold">LinkedIn & GitHub Profile Optimization</span> – Our team will review and enhance your online presence to attract recruiters and hiring managers.</li>
                </ul>
                
                <p class="text-lg/7 text-white/90">
                    With Hoetzin Job Assistance, you’ll be fully prepared to enter the job market and secure your first role with confidence! 🚀
                </p>
            `,
        },
        {
            question: "How do tuition payments work?",
            content: `
                <p class="text-lg/7 text-white/90">
                    At Hoetzin, we provide flexible financing options to make your education accessible:
                </p>
                <ul class="list-disc pl-9 space-y-2 text-lg/7 text-white/90">
                    <li><span class="font-bold">Upfront Payment</span> – Pay in full and receive a discount on tuition.</li>
                    <li><span class="font-bold">Third-Party Funding & Financing</span> – We partner with trusted lenders to offer financing solutions that fit your budget.</li>
                    <li><span class="font-bold">Hoetzin Financing Plan (0% Interest)</span> – Spread your payments over time with zero interest, making it easier to invest in your future.</li>
                    <li><span class="font-bold">Scholarships for Social Impact</span> – As part of our commitment to education and diversity, we offer scholarships to help students from underrepresented backgrounds or those facing financial barriers.</li>
                </ul>
                <p class="text-lg/7 text-white/90">
                    Our goal is to ensure that finances never stand in the way of your career transformation! 🚀
                </p>
            `,
        },
        {
            question: "Don’t see your question here? Contact us!",
            content: `
                <p class="text-lg/7 text-white/90">
                    Our admissions team is ready to answer any question and can help you decide if this bootcamp is right for you. <br/> Reach out at <a href="mailto:hello@hoetzin.com" class="font-bold hover:underline">hello@hoetzin.com</a> or call +1 404-966-2533.
                </p>
            `,
        },
        // More questions...
        ]
    return (
        <>
            <FAQhomepage faqs={faqs} />
        
        {/* Floating Call-to-Action Box */}

        <div className="relative h-64 sm:h-56 md:h-72 mb-40 sm:mb-44 bg-secondary-green">
            <Newsletter firstline="Ready to accelerate your career?" secondline="Apply now"/>
        </div>

        </>
    );
  }