const app = angular.module(`catFruits`, []);
app.controller(`OurController`, [
  `$http`,
  function ($http) {
    this.hello = `A Little Something to Show Our Appreciation for Your Invaluable Work!`;
    this.indexOfCats = null;

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
          console.log(response.data);
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
  },
]);
