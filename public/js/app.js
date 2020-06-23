const app = angular.module(`catFruits`, []);
app.controller(`OurController`, [
  `$http`,
  function ($http) {
    this.hello = `A Little Something to Show Our Appreciation for Your Invaluable Work!`;
    this.indexOfCats = null;
    this.Cats = [];
    this.index = null;
    this.catImage = null;
    this.catName = null;

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
    console.log('this.Cats Array is -', this.Cats);
    
  },
]);
