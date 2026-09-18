// Import dataset
mongoimport --db city --collection inspections --drop ./city_inspections.json

// Verify dataset
db.inspections.find({"id" : "10021-2015-ENFO"})

db.inspections.find({"result":"Out of Business"},{"business_name":1}).limit(10)

// Insert a Document
db.inspections.insertone({
  id: "20032-2020-ACME",
  certificate_number:"9998888",
  business_name: "ACME Explosives",
  date: Date(),
  result: "Business Padlocked",
  sector: "Explosive Retail Dealer-999",
  address: {
    number: "1721",
    street: "Boom Road",
    city: "BRONX"
    zip: "10463",
  }
})

// MongoDB queries
  // Count the number of unique inspection sectors
  db. inspections.distinct("sector") .length

  // Compare date fields for AUSTIN 2012 and ACME Explosives
  db.inspections. Findone ((business-name: "AUSTIN 2022"})}

  db.inspections. findOne({business_name: "ACME Explosives"})

  // Count businesses with "Violation Issued"
  db.inspections.countDocuments({result: "Violation Issued"})

// Update ACME Document
db.inspections.updateOne (
  {id: "20032-2020-ACME"},
  {
    $set: {
      business_name: "New ACME Flowers", 
      result: "Business Re-opened",
      comment: "Flowers after the explosion",
    }
  }
)

// Finding updated document
db. inspections. findOne({id: "20032-2020-ACME"})

// Updating all Documents that contain City is ROSEDALE
db.inspections.updateMany (
  {"address.city": "ROSEDALE"},
  {$set: {"address.zip": "76114"}}
)

// Delete fisrt document with result: "Violation Issued"
db.inspections.delete0ne({"result": "Violation Issued"})
