document.getElementById('load-jobs').addEventListener('click', loadJobs);

function loadJobs() {
    const jobs = [
        { title: "Web Developer", description: "Build a website", budget: "$500" },
        { title: "Graphic Designer", description: "Create a logo", budget: "$300" },
        { title: "SEO Expert", description: "Optimize website for search engines", budget: "$400" }
    ];

    const jobList = document.getElementById('job-list');
    jobList.innerHTML = ''; // Clear previous jobs

    jobs.forEach(job => {
        const jobItem = document.createElement('div');
        jobItem.className = 'job-item';
        jobItem.innerHTML = `<h3>${job.title}</h3><p>${job.description}</p><p>Budget: ${job.budget}</p>`;
        jobList.appendChild(jobItem);
    });
}

document.getElementById('apply-button').addEventListener('click', function() {
    alert('You have successfully applied for the job: ' + document.getElementById('job-title').innerText);
});
// Sample data for freelancers
const freelancers = [
    { name: "John Doe", skills: "Web Development, JavaScript" },
    { name: "Jane Smith", skills: "Graphic Design, Photoshop" },
    { name: "Mike Johnson", skills: "SEO, Marketing" }
];

const freelancerList = document.getElementById('freelancer-list');
freelancers.forEach(freelancer => {
    const freelancerItem = document.createElement('div');
    freelancerItem.className = 'freelancer-item';
    freelancerItem.innerHTML =