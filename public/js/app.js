const app = angular.module(`catFruits`, []);
app.controller(`OurController`, [
  `$http`,
  function ($http) {
    this.hello = `A Little Something to Show Our Appreciation for Your Invaluable Work!`;
    this.indexOfCats = null;
    this.Cats = [];
    this.catPhotoURLS = [
      "https://www.1stinflowers.com/pics/articles/poisonous/cat-sleeping-in-plant.jpg",
      "https://assets.blog.hgtv.ca/wp-content/uploads/2018/03/16161842/plants-pet-child-baby-safe.jpg",
      "https://static.boredpanda.com/blog/wp-content/uploads/2015/04/funny-cat-plant-1__605.jpg",
      "https://icatcare.org/app/uploads/2020/04/First-article-header-1-1200x600.jpg",
      "https://www.urbanjunglebloggers.com/wp-content/uploads/2019/10/botanicalsandbillie-Billie-Jean-1.jpg",
      "https://www.gardeningknowhow.com/wp-content/uploads/2014/02/kitty.jpg",
      "https://odiepetinsurance.com/wp-content/uploads/2020/01/iStock-497853209.jpg",
      "https://metaphoricalplatypus.com/wp-content/uploads/2012/12/cat-eating-plant.jpg",
      "https://www.urbanjunglebloggers.com/wp-content/uploads/2019/10/callieharrisonn-Bodhi-1.jpg",
      "https://www.urbanjunglebloggers.com/wp-content/uploads/2019/10/katinkafeijs-Bowie-e1570215237431.jpg",
      "https://www.urbanjunglebloggers.com/wp-content/uploads/2019/10/plantshapes-Ramona.jpeg",
      "https://www.urbanjunglebloggers.com/wp-content/uploads/2019/10/ladradorite.boy-Belle.jpg",
      "https://www.urbanjunglebloggers.com/wp-content/uploads/2019/10/pernillllllee-snow.jpeg",
      "https://www.urbanjunglebloggers.com/wp-content/uploads/2019/10/JuliaAndrsn-Archimedes.jpg",
      "https://cs4.pikabu.ru/post_img/big/2016/08/19/7/1471602142184565936.jpg",
      "https://sadanduseless.b-cdn.net/wp-content/uploads/2019/02/cat-plant5.jpg",
      "https://sadanduseless.b-cdn.net/wp-content/uploads/2019/02/cat-plant10.jpg",
      "https://sadanduseless.b-cdn.net/wp-content/uploads/2019/02/cat-plant6.jpg",
      "https://sadanduseless.b-cdn.net/wp-content/uploads/2019/02/cat-plant12.jpg",
      "https://sadanduseless.b-cdn.net/wp-content/uploads/2019/02/cat-plant15.jpg",
      "https://sadanduseless.b-cdn.net/wp-content/uploads/2019/02/cat-plant17.jpg",
      "https://sadanduseless.b-cdn.net/wp-content/uploads/2019/02/cat-plant3.jpg",
      "https://sadanduseless.b-cdn.net/wp-content/uploads/2019/02/cat-plant20.jpg",
      "https://i.pinimg.com/originals/9b/c8/da/9bc8daa64c3f7b947a178d16b6a12752.jpg",
      "https://funhuh.com/wp-content/uploads/2014/06/01874_007-576x560.jpg",
      "https://lh3.googleusercontent.com/proxy/KNTJ8cXTs99_ntc4GigyCLRaDec8qr6lme1LMvqeiZetA4gEBbwJriKFCj0e2PPTuqs1anq-7I53yBgwrc9OOobap84vI-daKEJjHx9aFyi1RFBlz-dGDmEi--O1tIDTdygX",
      "https://mishipets.com/wp-content/uploads/2019/05/cat-in-a-house-plant.jpg",
      "https://static.boredpanda.com/blog/wp-content/uploads/2015/04/cat-in-flowerpot-3__605.jpg",
      "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1563435997-13f96454eb3e%3Fixlib%3Drb-1.2.1%26q%3D80%26fm%3Djpg%26crop%3Dentropy%26cs%3Dtinysrgb%26w%3D1080%26fit%3Dmax",
      "https://laidbackgardener.files.wordpress.com/2016/05/20160524a.jpg?w=584",
      "https://lh3.googleusercontent.com/proxy/VS4OKCM1CqqTTzZZ0qykaumhcaVtP2CbDgAY6J--gNKtAAWBMnpDIoYsIChwswbzF2elshua2vA_gg8cjUQQXkTzTV9b1-4X-CQs2pA3W9LvSRvyR_TDt9e-2r03kTKJ7jR6t1mb",
      "https://assets.rbl.ms/644819/980x.jpg",
      "https://images.squarespace-cdn.com/content/v1/544591e6e4b0135285aeb5b6/1481671700634-HXWKZQXCEFSA8X7WSI04/ke17ZwdGBToddI8pDm48kBZw6jF4_OvU-ddo_vwqGhp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ub61YCrK70I7JIpWiI8ho4Yi1WvVNQtDE81xuRbL1MFKm0sD-Bab7E9MY8W31A7zMQ/image-asset.jpeg",
      "https://images-na.ssl-images-amazon.com/images/I/61xrnGLeMLL._AC_SX425_.jpg",
      "https://i.pinimg.com/originals/27/4b/c5/274bc58f3abbd07e1be30323b0589ef1.jpg",
      "https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg",
      "https://cdn.pixabay.com/photo/2018/01/07/15/21/food-3067562_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/07/29/18/11/eat-3570720_1280.jpg",
      "https://files.slack.com/files-pri/T0351JZQ0-F0167LSLVAL/11931.jpeg",
      "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.imgur.com%2FUzdVnty_d.jpg",
      "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fmedia1.giphy.com%2Fmedia%2FJIX9t2j0ZTN9S%2Fgiphy-downsized.gif%3Fcid%3D6104955e831a5238d3bf2263e896d59e1300a82b9b86c1ef%26rid%3Dgiphy-downsized.gif"
    ]
    this.catNames = [
    "Fluffernips",
    "Hisssero",
    "Gaius Cattus",
    "Chairman Meowwww",
    "McGillycuddleskins",
    "Richard the Purrrrd",
    "Pawbert Louis Stevenson",
    "Felinious Munk",
    "Samuel Clawments",
    "Herbie Hanclawck",
    "Jean Luc Pawcard",
    "Gus",
    "Chonkman",
    "Catpurrnicus",
    "Bing Clawsby",
    "Puma Thurman",
    "Skitty",
    "Glameow",
    "Harold: 8th wonder of the world",
    "Fluffy Baboom Bom", 
    "Sorty McBubbleSort",
    "Catty McCat Face",
    "Skimbleshanks",
    "Meowise",
    "Fishbait",
    "Bombalurina", 
    "Bustaphor Jones",
    "Rum Rum Tugger",
    "Purrman Melville"
    ]
    this.index = null;
    this.catImage = null;
    this.catName = null;

    // this just console logs the value of whatever is at each index point, but you could easily change this to whatever data point you wanted to bind to - like an image source or text.
    this.randomImageAndName = () => {
      const randomPhotoIndex = Math.floor(Math.random() * this.catPhotoURLS.length);
      const randomNameIndex = Math.floor(Math.random() * this.catNames.length);
      const catPhoto = this.catPhotoURLS[randomPhotoIndex];
      const catMoniker = this.catNames[randomNameIndex];
      console.log(catPhoto);
      console.log(catMoniker);
    }

    this.addCatToArray = (url) => {
      this.catPhotoURLs.push(url);
      return true;
    }


    this.showPrevImage = () => {
      if (this.catImage === null && this.Cats.length > 0) {
        this.index = 0
        this.catImage = this.Cats[this.index].image
        this.catName = this.Cats[this.index].name
      } else if (this.catImage === null && this.Cats.length === 0) {
        return;
      } else {
        if (this.index > this.Cats.length) {
          this.index --;
        } else {
          this.index = this.Cats.length - 1;
        }
      }
    }

    this.showNextImage = () => {
      if (this.catImage === null && this.Cats.length > 0) {
        this.index = 0
        this.catImage = this.Cats[this.index].image
        this.catName = this.Cats[this.index].name
      } else if (this.catImage === null && this.Cats.length === 0) {
        return;
      } else {
        if(this.index < this.Cats.length) {
          this.index ++;
        } else {
          this.index = 0;
        }
      }
    }
  
    this.editCat = (c) => {
      $http({
        method: `PUT`,
        url: `/catfruits/` + c._id,
        data: {
          name: this.name,
          image: this.image,
          message: this.message,
        },
      }).then(
        (res) => {
          console.log(this.res);
          this.getCats();
        },
        (err) => {
          console.log(err);
        }
      );
    };

    this.deleteCat = (c) => {
      $http({
        method: `DELETE`,
        url: `/catfruits/` + c._id,
      }).then(
        (res) => {
          console.log(res);
          this.getCats();
        },
        (err) => {
          console.log(err);
        }
      );
    };

    this.getCats = () => {
      $http({
        url: `/catfruits`,
        method: `GET`,
      }).then(
        (response) => {
          this.Cats = response.data;
          console.log(this.Cats);
        },
        (error) => {
          console.log(error);
        }
      );
    };

    this.addNewCat = () => {
      $http({
        url: `/catfruits`,
        method: `POST`,
        data: {
          name: this.name,
          image: this.image,
          message: this.message,
        },
      }).then(
        (response) => {
          console.log(response);
          this.createdCat = response.data;
          this.getCats();
        },
        (error) => {
          console.log(error);
        }
      );
    };

    this.getCats();
    this.randomImageAndName();
    this.randomImageAndName();
    console.log('this.Cats Array is -', this.Cats);
    
  },
]);
