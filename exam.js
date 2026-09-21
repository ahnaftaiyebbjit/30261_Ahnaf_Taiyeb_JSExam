function loadAppointmentPage(aptId) {
fetchAppointment(aptId)
.then(apt => {
fetchDoctor(apt.doctorId);
})
.then(doctor => {
console.log("Doctor:", doctor.name);
})
.catch(err => console.log("Failed:", err.message));
}

async function loadAppointmentPage(aptId) {
    
    try{
        const appts = await fetchAppointment(aptId);
        const doc = await fetchDoctor(apt.doctorId);
        console.log(doc.name)
    } catch(err) 
        { console.log("Failed:", err.message);}
}