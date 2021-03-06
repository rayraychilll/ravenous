const apiKey = 'psM7avHaWmd5eDNESL8TjPq3chyz5olduOZJm3NJSkGJ2gMuS7uPkFZCMMgAk-op3XYR26Wu7F8mTpa4rOpAn9uYtXjpEEgZRLkMmr1tKTeXVnmBpZxrE225PV6DW3Yx';

const Yelp = {
  search(term, location, sortBy) {
    console.log(sortBy);
    console.log("searching");
    return fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}',
  {
    headers: {
    Authorization: `Bearer ${apiKey}`
  }
}).then(response => {
     return response.json();
   }).then(jsonResponse => {
    if (jsonResponse.businesses) {
      return jsonResponse.businesses.map(business => ({
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        category: business.categories[0].title,
        rating: business.rating,
        reviewCount: business.review_count
      }));
    }
  });
  }
  }

  export default Yelp;
