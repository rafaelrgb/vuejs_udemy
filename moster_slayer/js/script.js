new Vue({
  el: "#monsterSlayerApp",
  data: {
    gameIsRunning: false,
    playerHp: 100,
    monsterHp: 100,
    log: []
  },
  methods: {
    startNewGame: function() {
      this.playerHp = 100;
      this.monsterHp = 100;
      this.gameIsRunning = true;
      this.log = [];
    },
    attack: function() {
      var damage = this.calculateDamage(2, 8);
      this.monsterHp = this.monsterHp - damage > 0 ? this.monsterHp - damage : 0;
      this.log.unshift({
        type: "attack",
        msg: "You hit the monster for " + damage + "HP!"
      });
      if (!this.checkEnd()) {
        this.monsterTurn();
      }      
    },
    specialAttack: function() {
      var damage = this.calculateDamage(7, 13);
      this.monsterHp = this.monsterHp - damage > 0 ? this.monsterHp - damage : 0;
      this.log.unshift({
        type: "attack",
        msg: "You hit the monster for " + damage + "HP!"
      });
      if (!this.checkEnd()) {
        this.monsterTurn();
      }
    },
    heal: function() {
      var healAmmount = this.calculateDamage(5, 10);
      if (this.playerHp + healAmmount < 100) {
        this.playerHp += healAmmount;
      } else {
        healAmmount = 100 - this.playerHp;
        this.playerHp = 100;
      }
      this.log.unshift({
        type: "heal",
        msg: "You healed " + healAmmount + "HP!"
      });
      if (!this.checkEnd()) {
        this.monsterTurn();
      }
    },
    monsterTurn: function() {
      var damage = this.calculateDamage(2, 8);
      this.playerHp = this.playerHp - damage > 0 ? this.playerHp - damage : 0;
      this.log.unshift({
        type: "damage",
        msg: "The monster hit you for " + damage + "HP!"
      });
      this.checkEnd();
    },
    giveUp: function() {
      this.defeat();
    },
    success: function() {
      alert("Congratulations! You've slain the monster!");
      if (confirm("Do you want to start a new game?")) {
        this.startNewGame();
      } else {
        this.gameIsRunning = false;
      }
    },
    defeat: function() {
      alert("Too bad! The monster has slain you...");
      if (confirm("Do you want to start a new game?")) {
        this.startNewGame();
      } else {
        this.gameIsRunning = false;
      }
    },
    checkEnd: function() {
      if (this.monsterHp <= 0) {
        this.success();
        return true;
      }
      if (this.playerHp <= 0) {
        this.defeat();
        return true;
      }
      return false;
    },
    calculateDamage: function(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  },
  computed: {
    playerHealthBar: function() {
      return { width: this.playerHp + '%' };
    },
    monsterHealthBar: function() {
      return { width: this.monsterHp + '%' };
    }
  }
});