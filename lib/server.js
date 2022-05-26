const VisualpartnerController = require("./controllers/VisualpartnerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visualpartner Api welcome!"});
});

app.get("/visualpartner/students", (request, response) => {
    const visualpartnersList = VisualpartnerController.getVisualpartners();
    response.json(visualpartnersList);
});

app.get("/visualpartner/students/email/:certification", (request, response) => {
    const certification = (request.params.certification.toLowerCase() === "true");//Para conertir un String en boolean
    const visualpartnersEmailsList = VisualpartnerController.getEmailsByCertification(certification);
    response.json({haveCertification: certification, emails: visualpartnersEmailsList});
});

app.get("/visualpartner/students/:credits", (request, response) => {
    const credits = request.params.credits;
    const visualpartnersList = VisualpartnerController.getVisualpartnersByMoreThanCredits(credits);
    response.json({MoreThanCredits: credits, students: visualpartnersList});
});

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Visualpartner API in localhost:${port}`);
});