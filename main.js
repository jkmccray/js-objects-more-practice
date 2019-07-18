// ------ Practice: Represent your Pet ------

// Create an object that represents your pet.
// 1. Name property with a string value.
// 2. Species property with a string value.
// 3. Nicknames property with an array value. Array contains strings.
// 4. Age property with an integer value

const kiwi = {
  name: "Kiwi",
  species: "cat",
  nicknames: ["Kiwi Stubbs", "turd", "you little bitch"],
  age: 8
}

// ------ Practice: Fast Food Ordering ------
// You need to write code to represent the process of ordering food at a fast food joint. 
// Your restaurant is Bob's Burgers, and you have some starter code below. 
// The object will have two behaviors that you must define.

// 1. The object should have a property named orders that is an array. You will need to define this.
// 2. Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
// 3. Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
// 4. Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.

const restaurant = {
  name: "Bob's Burgers",
  orders: [],
  placeOrder: function (meal) {
    this.orders.push(meal)
  },
  getAllOrders: function () {
    return this.orders
  }
}

const chickenComboMeal = {
  sandwichType: "grilled chicken",
  fries: true,
  drinkSize: "L"
}

const cheeseburger = {
  sandwichType: "burger",
  fries: false,
  drinkSize: "M"
}

// Place an order
let newOrder1 = restaurant.placeOrder(chickenComboMeal)
let newOrder2 = restaurant.placeOrder(cheeseburger)

// Invoke the function to return the list of all orders
let allOrders = restaurant.getAllOrders()

// Output all orders to the console using console.table()
console.table(allOrders)


// ------ Challenge: Political Campaign ------ 
const campaign = {
  candidate: {
    name: "Elizabeth Sanger",
    changeName: newName => {
      campaign.candidate.changeName = newName
    },
    congressionalDistrict: "5th",
    bio: "Elizabeth Sanger (born June 19, 1954) is an American politician serving as the U.S. Representative for Tennessee's 5th congressional district (based in Nashville), serving since 2003. She is a member of the Democratic Party and the Blue Dog Coalition, and previously represented Tennessee's 4th congressional district from 1983 to 1995.",
    platformStatements: {
      Taxes: "Taxes schmaxes",
      Jobs: "Need more jobs",
      Infrastructure: "Infrastructure - It's bayud",
      HealthCare: "Universal health care",
      CrimeAndEnforecement: "Just say no to drugz",
      changePlatformStatment: (topic, newPlatformStatement) => {
        campaign.candidate.platformStatements[topic] = newPlatformStatement
      }
    },
    missionStatement: "I work for you. As your representative in Congress, it's my job to make sure your voice is heard.",
    changeCandidateDetails: function (property, newDetails) {
      campaign.candidate[property] = newDetails
    }
  },
  calendar: [
    {
      eventName: "Charity Ball",
      date: "7/30/19",
      time: "6PM"
    },
    {
      eventName: "Donation Luncheon",
      date: "8/1/19",
      time: "12PM"
    }
  ],
  volunteers: [
    {
      volunteerName: "Beth",
      address: "101 Your Beeswax Ave, Nashville, TN 12345",
      email: "beth@gmail.com",
      phoneNumber: "555-5555",
      availabililty: ["M", "T", "W", "R"],
      activities: ["answering phone calls"]
    },
    {
      volunteerName: "Mark",
      address: "500 Twenty Five Thousand Six Hundred Ave, Nashville, TN 12345",
      email: "markopolo@gmail.com",
      phoneNumber: "555-5556",
      availabililty: ["T", "W", "R", "F"],
      activities: ["taking polls"]
    },
  ],
  addVolunteer: (volunteerName, address, email, phoneNumber, availabililty, activities) => {
    const newVolunteer = ({
      volunteerName, address, email, phoneNumber, availabililty, activities
    })
    campaign.volunteers.push(newVolunteer)
  },
  helpfulLinks: [
    {
      urlName: "URL for donation form",
      url: "https://cooper.house.gov/contact"
    },
    {
      urlName: "URL for registering to vote",
      url: "https://www.nashville.gov/Election-Commission/Register-to-Vote.aspx"
    }
  ],
  addLink: function (urlName, url) {
    const newLink = {urlName, url}
    campaign.helpfulLinks.push(newLink) 
  },
  imageGallery: ["head shot", "picture of family", "picture of constituents"],
  addToImageGallery: function (newImage) {
    this.imageGallery.push(newImage)
  }
}

// ------ Advanced Challenge ------
// After you have defined all the objects for representing the data about Elizabeth's campaign, write a corresponding function 
// for each one whose purpose is to change the state of the object. Then use your functions to modify the existing data.

campaign.addLink("My website", "google.com")
console.log(campaign.helpfulLinks)

campaign.addVolunteer("Rick James", "300 B Place", "imrickjamesb@gmail.com", "503-2918", ["M", "W"], ["knock down doors"])
console.table(campaign.volunteers)
console.log(campaign.volunteers[2])

campaign.addToImageGallery("picture of mah face")
console.log(campaign.imageGallery)

campaign.candidate.platformStatements.changePlatformStatment("Taxes", "Raise taxes")
console.log(campaign.candidate.platformStatements)

campaign.candidate.changeName("Barbara Manatee")
console.log(campaign.candidate.name)

campaign.candidate.changeCandidateDetails("congressionalDistrict", "6th")
console.log(campaign.candidate.congressionalDistrict)
