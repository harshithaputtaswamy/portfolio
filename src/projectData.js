const projectData = [
    {
        image_url: require('./images/projects/splitwiser.png'),
        title: 'Splitwiser – A Splitwise clone',
        description: "Created a Splitwise-inspired application featuring receipt scanning via camera or file upload, \
        group and non-group expense tracking, and dynamic graphical and manual split functionalities.\
        Leveraged Google Gemini API to convert receipt images into JSON data, facilitating graphical expense visualization.\
        Utilized NextJS for UI and API development, Google Firebase for backend services, and Firestore for storing receipt data.",
        link: '',
        subject: 'Full Stack Development, LLM '
    },
    {
        image_url: require('./images/projects/MAB.png'),
        title: 'Iterative voting with Multi-Arm Bandits',
        description: "Designed and implemented a dynamic Multi-Armed Bandit (MAB) framework to model iterative decision-making processes, optimizing voter utilities and drawing parallels to complex bidding strategies in ad platforms. \
        Developed scalable algorithms for strategic optimization in multi-agent systems, leveraging Integer Linear Programming (ILP) to solve resource allocation and ranking problems akin to budget distribution. \
        Conducted extensive experimental analysis on preference aggregation and rule convergence, producing insights on maximizing utility and satisfaction, applicable to auction mechanisms and real-time bidding environments. \
        Explored strategic behavior and stability in iterative systems, analyzing performance metrics such as utility optimization and convergence rates, directly aligning with optimizing auction dynamics in competitive markets.",
        link: '',
        subject: 'Reinforecement Learning'
    },
    {
        image_url: require('./images/projects/RAT.png'),
        title: 'Remote Access Trojan (RAT) with KeyLogging – A Study',
        description: "Demonstrated how attackers can execute commands remotely using RAT and capture sensitive information using social\
        engineering and network vulnerabilities.\
        Utilized Python for RAT creation, Snort for intrusion detection, Suricata for prevention, and a honeypot to analyze behavior.\
        Successfully detected and mitigated attacks while diverting threats to decoy systems.",
        link: '',
        subject: 'Cyber Security'
    },
    {
        image_url: require('./images/projects/CAO.png'),
        title: 'Design and Implementation of Instruction Pipeline of Processors',
        description: "Planned and executed a superscalar, out-of-order pipeline simulator in C with 12 stages \
        including fetch, decode, instruction analysis, renaming, execution, and retirement, supporting 19 instruction types.\
        Integrated Branch Table Buffer (BTB) and branch prediction mechanisms to reduce pipeline stalls by 50%.\
        Implemented advanced out-of-order processing, including instruction renaming, and dependency analysis",
        link: '',
        subject: 'Computer Architechture'
    },
    {
        image_url: require('./images/projects/autokube.png'),
        title: 'Autokube',
        description: "Developed web application for automating Kubernetes cluster creation and modification. \
        Utilized the MERN stack (MongoDB, Express.js, React, Node.js) to build APIs to initiate scripts, \
        triggering a series of workflows for managing the backend Kubernetes clusters.",
        link: '',
        subject: 'Startup Project'
    },
    {
        image_url: require('./images/projects/CNN.png'),
        title: 'Gender recognition Android app',
        description: "Worked in a team of 3 to create a web application using Google Colab and a dataset from Kaggle \
        to detect gender of a given image, achieved 96% accuracy which was presented in front of 100+ students and faculty members.",
        link: '',
        subject: 'Convolutional Neural Networks'
    },
    {
        image_url: require('./images/projects/atari.png'),
        title: 'Deep Q Learning network to play Atari games',
        description: "Implementation of DQN using tensorflow to play complex Atari games by passing the pixels on the screen to the network.",
        link: '',
        subject: 'Reinforcement Learning Project'
    },
    {
        image_url: require('./images/projects/ResNet50.png'),
        title: 'Optical Character Recognition with ResNet50',
        description: "Built a Resnet model using Keras framework that can recognize a character present on the screen.",
        link: '',
        subject: 'Convolutional Neural Networks'
    },
    {
        image_url: require('./images/projects/car.png'),
        title: 'Online Car Rental System website',
        description: "Modeled a web application using Django framework to rent cars online where company can list their cars. Customers can book more \
        than 1 car from the same of a different company.",
        link: '',
        subject: 'FullStack Development Project'
    },
    {
        image_url: require('./images/projects/YES.png'),
        title: 'Developed a Web App for the YES!+ club of BIT',
        description: "A platform where all the club members can see the details of the upcoming events, members of the club \
        and also previous events summary. MERN stack was used to achieve the same.",
        link: '',
        subject: 'FullStack Development Project'
    },

]

export default projectData