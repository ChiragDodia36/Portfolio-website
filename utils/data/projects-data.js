import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Full-Stack E-Commerce Platform',
        description: " Built a scalable e-commerce web application using the MERN stack, featuring Firebase Authentication for secure login and Razorpay integration for seamless payments. Developed RESTful APIs for product management, user authentication, and order processing, reducing backend latency by 30% and ensuring a smooth user experience.",
        tools: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Firebase Auth', 'Razorpay API', 'REST API'],
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Sign Language Recognition System',
        description: 'Developed a real-time hand gesture recognition system using Python, OpenCV, and TensorFlow, achieving 95% accuracy in sign detection. Utilized TensorFlow Object Detection API for model training and optimization, enabling dynamic recognition of ASL gestures. Designed to enhance Human-Computer Interaction (HCI), the system supports applications like gesture-controlled robotics and assistive tech for the hearing impaired.',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Roshni – Assistive Mobile App',
        description: 'Created an inclusive mobile app for the visually impaired using Flutter and ML integration. Implemented modules for Real-time Object Detection, Color Recognition, Text Reading via OCR, PDF Reading, and SOS emergency alerts. Enhanced accessibility by integrating audio feedback and camera-based input, enabling independent navigation and interaction for users with visual disabilities.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'SAKEC Marathon App',
        description: "Built a Flutter-based mobile app enabling users to virtually participate in races while tracking speed, time, distance, and steps. Integrated Firebase for real-time data sync and user activity logging. Enhanced user engagement through seamless performance monitoring and live race updates, encouraging remote fitness participation and competition.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },