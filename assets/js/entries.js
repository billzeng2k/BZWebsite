const games = [
    {
        type: 'entry',
        title: 'Quick Maths',
        image: './images/quick_maths.png',
        subtitle: 'Fall 2018',
        description: '<p>Challenge your friends to an epic battle of wits!</p><p>Solidify your position as the alpha problem solver!</p><p>Duke it out in a round of Quick Maths!</p>',
        href: 'https://www.facebook.com/instantgames/2130997363884439',
        blurb: 'Facebook Instant Games'
    },
    {
        type: 'entry',
        title: 'Flastronauts',
        image: './images/flastronauts.png',
        subtitle: 'Summer 2017',
        description: '<p>The Earth is quickly becoming overcrowded, we must colonize other planets to avoid any disasters.</p><p> It is your job to bring life to these planets, but be careful, some might not be happy with your presence on the planet. Are you up to the task? Good. </p><p>Remember to bring your flashlight.</p>',
        href: 'http://ldjam.com/events/ludum-dare/39/flastronaut',
        blurb: 'Ludum Dare Game Jam'
    },
    {
        type: 'entry',
        title: 'Bubbly',
        image: './images/bubble_wall.png',
        subtitle: 'Summer 2019',
        description: '<p>An interactive musical bubble wall that responds to user input!</p><p>Placed top 10</p>',
        href: 'https://github.com/billzeng2k/bubble-wall',
        blurb: 'Hack the 6ix'
    },
    {
        type: 'entry',
        title: 'Shape Shooter',
        image: './images/shape_shooter.png',
        subtitle: 'Winter 2017',
        description: "<p>Geometry is hard, but who needs to understand shapes when you can just shoot them! </p><p>This 'Asteroids' inspired game has players collect power-ups and shoot different shapes all with unique properties. Watch out for the triangle, that one will get ya!</p>",
        href: 'https://play.google.com/store/apps/details?id=com.BillZeng2k.Shapes',
        blurb: 'Google Play Store'
    },
];

const jobs = [
    {
        type: 'entry',
        title: 'Kitchenmate',
        image: './images/kitchenmate.png',
        subtitle: 'Summer 2019',
        description: '<p>Implemented supply chain optimization service to drive the company’s ingredient purchasing decisions, generating positive net margins on each product</p><p>Created database migration diff tool and automated backup system, preventing data loss and improving developer velocity</p><p>Bootstrapped a route navigation system for drivers with real time delivery notifications sent to the company and customers</p><p>Designed and built the company website (kitchenmate.com)</p>',
        blurb: 'Software Engineer',
        href: 'https://www.kitchenmate.com/'
    },
    {
        type: 'entry',
        title: 'Triway Education',
        image: './images/triway.png',
        subtitle: 'Fall 2016 - Summer 2018',
        description: '<p>Taught over 30 students graph theory, dynammic programming and data structures</p><p>Lead the robotics team to the provincial Vex Robotics competition</p>',
        blurb: 'Programming and Math Teacher',
        href: 'http://triwayeducation.com'
    },
    {
        type: 'entry',
        title: 'Ava Smart Gardens',
        image: './images/ava.png',
        subtitle: 'Winter 2017',
        description: '<p>Prototyped a web app that enabled users to monitor plant growth and fine-tune garden conditions via smart-garden sensors</p><p>The web app was implemented with NodeJs that connects to a data feed from Firebase</p>',
        blurb: 'Web Design Intern',
        href: 'https://www.avagrows.com'
    },
    {
        type: 'entry',
        title: 'Gifted People Services',
        image: './images/gps.png',
        subtitle: 'Summer 2017',
        description: '<p>Taught children the fundamentals of web design</p><p>Migrated the hosting server from Bluehost to goDaddy</p>',
        blurb: 'Web Design Intern and Teacher',
        href: 'https://giftedpeople.ca/'
    },
];

const education = [
    {
        type: 'divider',
        title: 'Contests',
    },
    {
        type: 'entry',
        title: 'Canadian Computing Competition',
        image: './images/silver.png',
        subtitle: 'Summer 2018',
        description: "<p>Solved problems from topics ranging from</p><ul><li>Graph Theory (BFS, DFS, Dijkstra's, Prim's, Kruskal's)</li><li>Data Structures (Binary Search Tree, Binary Indexed Tree, Segment Tree, Disjoint Set)</li><li>Dynammic Programming</li></ul>",
        blurb: 'Silver Medalist'
    },
    {
        type: 'entry',
        title: 'Euclid Math Contest',
        image: './images/honour_roll.png',
        subtitle: 'Summer 2018',
        description: '<p>Solved problems from topics ranging from</p><ul><li>Algebra</li><li>Geometry</li><li>Calculus</li><li>Combinatorics</li></ul>',
        blurb: 'Honour Roll'
    },
    {
        type: 'divider',
        title: 'School',
    },
    {
        type: 'entry',
        title: 'University of Waterloo',
        image: './images/waterloo.png',
        subtitle: 'Fall 2018 - Present',
        description: '<ul> <li> Pursuing a Bachelors of Computer Science </li> <li> Taking CS 145 (Advanced Computer Science) </li> <li> Culmative 4.0 GPA</li> </ul>',
        blurb: 'Bachelors of Computer Science'
    },
    {
        type: 'entry',
        title: 'Unionville High School',
        image: './images/uhs.png',
        subtitle: 'Fall 2014 - Summer 2018',
        description: '<ul> <li> Received the Computer Science award </li> <li> President of the Computer Science club in grade 12 </li> <li> Director of the Robotics club in grade 12 </li> </ul>',
    },
    {
        type: 'divider',
        title: 'Skills',
    },
    {
        type: 'entry',
        title: 'Languages',
        description: '<p>C++, C#, Java, Javascript, Python, HTML, CSS, SQL</p>',
    },
    {
        type: 'entry',
        title: 'Frameworks',
        description: 'ReactJs, NodeJs, GraphQL, Angular, Bootstrap, AWS',
    },
    {
        type: 'divider',
        title: 'Volunteering',
    },
    {
        type: 'entry',
        title: 'Rotary Club',
        description: 'By co-operating and leading my team, we made sure that the Markham ribfest operated smoothly',
        subtitle: 'Fall 2017',
        image: './images/rotary_club.png'
    },
    {
        type: 'entry',
        title: 'Cancer Society',
        subtitle: 'Summer 2014',
        description: '<p>Collected donations by holding the door open and giving people a smile!</p>',
        image: './images/cancer_society.png'
    },
];

const hobbies = [
    {
        type: 'divider',
        title: 'Sports',
    },
    {
        type: 'entry',
        title: 'Tennis',
        image: './images/tennis.png',
        subtitle: '2008 - 2015',
        description: '<p>Qualified and competed in U14 Nationals</p><p>Placed 6th place in U14 provincials</p>'
    },
    {
        type: 'entry',
        title: 'Rock Climbing',
        image: './images/rock.png',
        subtitle: 'Fall 2016 - Present',
        description: '<p>Can climb V5s</p><p>No technique, only brute force</p>'
    },
    {
        type: 'entry',
        title: 'Basketball',
        image: './images/basketball.png',
        subtitle: 'Winter 2019 - Present',
        description: '<p>Intramural basketball at the University of Waterloo</p><p>Can only play defense</p>'
    },
    {
        type: 'divider',
        title: 'Art',
    },
    {
        type: 'entry',
        title: 'Flat',
        image: './images/flat.png',
        description: '<p>Experienced in Photoshop and Illustrator</p><p>Primary artstyle</p>'
    },
    {
        type: 'entry',
        title: 'Pixel',
        image: './images/pixel.png',
        description: '<p>Can animate a walk cycle</p>'
    },
    {
        type: 'entry',
        title: 'Low Poly',
        image: './images/low_poly.png',
        description: '<p>Learning low poly just for fun!</p><p>Understands the basics of Blender, Maya and ZBrush</p>'
    },
    {
        type: 'divider',
        title: 'Interests',
    },
    {
        type: 'entry',
        title: 'Board Games',
        image: './images/board_games.png',
        description: '<p>Always inting</p>'
    },
];

const lol = [
    {
        type: 'entry',
        title: 'Thank You!',
        image: './images/face.png',
        subtitle: 'From now till forever <3',
        description: "<p>Thanks for viewing my website!</p><p>I had only one goal when I started developing this page and it was to create something that represented me. </br> With this website I believe I created something only I could think of, and I'm really proud of how this turned out :)</p><p>I had a lot of fun creating this website, and I hope you had a lot of fun exploring it</p><p>OK THATS ALL, CYA LATER ALLIGATOR</p>"
    },
];