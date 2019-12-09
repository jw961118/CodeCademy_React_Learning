let menu = {
    _courses : {
      appetizers : [],
      mains : [],
      desserts : [],
    },
    
    get appetizers() {
        return this._courses.appetizers;
      },
    get mains() {
        return this._courses.mains;
      },
    get desserts() {
        return this._courses.desserts;
      },
    
    set appetizers (appetizers) {
        this._courses.appetizers = appetizers;
      },
    set mains (mains) {
        this._courses.mains = mains;
      },
    set desserts (desserts) {
        this._courses.desserts = desserts;
      },
    
    get courses() {
      return {
        appetizers : this.appetizers,
        mains : this.mains,
        desserts : this.desserts
      }
    },
    
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name : dishName,
        price : dishPrice
      };
      
      this._courses[courseName].push(dish);
    },
    
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random()*dishes.length);
      return dishes[randomIndex];
    },
    
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const mains = this.getRandomDishFromCourse('mains');
      const desserts = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + mains.price + desserts.price;
      
      return `Your meal is ${appetizer.name}, ${mains.name}, ${desserts.name}. The total price is $${totalPrice}.`;
    }
    }
  
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('appetizers', 'Mushroom Soup', 5.25);
  menu.addDishToCourse('appetizers', 'Shit', 2.25);
  menu.addDishToCourse('mains', 'Chicken Chop', 14.25);
  menu.addDishToCourse('appetizers', 'Spaghetti', 12.25);
  menu.addDishToCourse('appetizers', 'Nasi Goreng', 8.25);
  menu.addDishToCourse('desserts', 'Pudding', 5.25);
  menu.addDishToCourse('desserts', 'Drinks', 3.25);
  menu.addDishToCourse('desserts', 'Sushi', 1.25);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);