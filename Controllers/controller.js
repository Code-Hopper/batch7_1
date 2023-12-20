let student_data = [
    { student_id: 1, student_name: "Student 1", student_number: "123456789", student_city: "Nagpur", student_subject: "BCA" },
    { student_id: 2, student_name: "Student 2", student_number: "987654321", student_city: "Nagpur", student_subject: "BCCA" },
    { student_id: 3, student_name: "Student 3", student_number: "456789123", student_city: "Mumbai", student_subject: "BBA" },
    { student_id: 4, student_name: "Student 4", student_number: "321987654", student_city: "Pune", student_subject: "BBACA" },
    { student_id: 5, student_name: "Student 5", student_number: "123456123", student_city: "Delhi", student_subject: "BSC" },
    { student_id: 6, student_name: "Student 6", student_number: "987654789", student_city: "Nagpur", student_subject: "BTECH" },
    { student_id: 7, student_name: "Student 7", student_number: "741852963", student_city: "Nagpur", student_subject: "BCOM" },
    { student_id: 8, student_name: "Student 8", student_number: "753951842", student_city: "Nagpur", student_subject: "BA" },
    { student_id: 9, student_name: "Student 9", student_number: "987654789", student_city: "Pune", student_subject: "BPHARM" },
    { student_id: 10, student_name: "Student 10", student_number: "7417744963", student_city: "Pune", student_subject: "POLY" },
    { student_id: 11, student_name: "Amey Khondekar", student_number: "753951842", student_city: "Pune", student_subject: "BSW" }
]


let GetHome = (req, res) => {
    // res.send("Hello Welcome to Home page !")
    // res.sendFile("index.html")

    res.render('index', { data: student_data })
}

let GetAbout = (req, res) => {
    // res.send("123651732fghv  Hello Welcome to About page !")
    // res.sendFile("")
}

let GetContact = (req, res) => {
    // res.send("Hello Welcome to Contact page !")
    // res.sendFile("./contact.html")

    let name = "Amey Khondekar"

    res.render("contact", { name })
}

let GetReviews = (req, res) => {
    // res.send("Hello Welcome to Reviews page !")
    // res.sendFile("reviews.html")
    res.render('reviews')
}

// posting 


let PostHome = (req, res) => {
    console.log("user has posted something")
    console.log(req.body)
    student_data.push(req.body)
    res.redirect('/');
}

// delete entry

let deleteEntry = (req, res) => {
    console.log(req.body)
    
    let delete_element = req.body.delete_id;

    student_data = student_data.filter((element)=>{
        // return !delete_element
    })

    res.redirect("/")

    // res.json({ "message": `you are trying to delete ${delete_index}` })
}


export { GetHome, GetAbout, GetReviews, GetContact, PostHome, deleteEntry }