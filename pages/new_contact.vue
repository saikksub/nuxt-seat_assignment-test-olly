<template>
  <div class="mt-16">
    <!-- <v-row align="center"> -->
    <v-card max-width="400" class="mx-auto" v-show="!isSeat">
      <v-card-title center primary-title>
        <h4 class="text-center">Book a Seat</h4>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" :lazy-validation="lazy">
          <v-text-field
            label="Solo"
            v-model="name"
            :rules="nameRules"
            placeholder="Fullname"
            solo
            required
          ></v-text-field>
          <v-text-field
            label="Solo"
            v-model="email"
            :rules="emailRules"
            placeholder="Email"
            solo
            required
          ></v-text-field>
          <v-btn :disabled="!valid" @click="submitForm" large color="secondary">
            Select Seat Number
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
    <!-- </v-row> -->
    <v-card max-width="1024" class="mx-auto" v-show="isSeat">
      <v-card-title center primary-title>
        <h4 class="text-center">Pick a Seat</h4>
      </v-card-title>
      <v-card-text>
        <ol class="cabin fuselage">
          <li class="row" v-for="(row, i) in seats" :key="i">
            <ol class="seats" :type="i + 1">
              <li class="seat" v-for="(seat, i) in row" :key="i">
                <input
                  type="checkbox"
                  :id="`${seat.row}${seat.col}`"
                  :disabled="seat.filled"
                  :value="`${seat.row}${seat.col}${i}`"
                  v-model="checkedSeats"
                  @change="checkIfUserHasSelectedSeats"
                />
                <label :for="`${seat.row}${seat.col}`"
                  >{{ seat.row }} {{ seat.col }}</label
                >
              </li>
            </ol>
          </li>
        </ol>
      </v-card-text>
      <v-card-actions>
        <v-btn
          large
          color="primary"
          @click="bookSeat"
          :disabled="checkedSeats.length === 0"
        >
          Book Seat
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NewContactForm",
  data() {
    return {
      valid: true,
      isSeat: false,
      name: "",
      nameRules: [v => !!v || "Name is required"],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      lazy: false,
      checkedSeats: []
    };
  },
  computed: {
    ...mapGetters(["seats"])
  },
  methods: {
    checkIfUserHasSelectedSeats() {
      if (this.checkedSeats.length > 1) {
        this.checkedSeats = [this.checkedSeats.slice(-1)[0]];
      }
    },
    submitForm() {
      this.isSeat = true;
    },
    bookSeat() {
      const [seat] = this.checkedSeats;
      const [row, col, index] = seat.split("");

      const seatInfo = {
        row: parseInt(row),
        col: parseInt(col),
        seat_number: `${row}, ${col}`,
        filled: true,
        user: {
          name: this.name,
          email: this.email
        }
      };
      this.$store.dispatch("bookASeat", seatInfo);
      this.$router.push("/");
    }
  }
  // mounted() {
  //   console.log(this.seats);
  // }
};
</script>

<style lang="scss">
.seats {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
}

.v-application ol {
  padding-left: 0;
}

.seat {
  display: flex;
  flex: 0 0 14.28571428571429%;
  padding: 5px;
  position: relative;
  &:nth-child(3) {
    margin-right: 14.28571428571429%;
  }
  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
  }
  input[type="checkbox"]:checked {
    + label {
      background: #ff9800;
      -webkit-animation-name: rubberBand;
      animation-name: rubberBand;
      animation-duration: 300ms;
      animation-fill-mode: both;
    }
  }
  input[type="checkbox"]:disabled {
    + label {
      background: #ffc107;
      text-indent: -9999px;
      overflow: hidden;
      &:after {
        content: "Taken";
        text-indent: 0;
        position: absolute;
        top: 15px;
        left: 50%;
        transform: translate(-50%, 0%);
      }
      &:hover {
        box-shadow: none;
        cursor: not-allowed;
      }
    }
  }
  label {
    display: block;
    position: relative;
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.5rem;
    padding: 16px 50px;
    background: #607d8b;
    border-radius: 5px;
    animation-duration: 300ms;
    animation-fill-mode: both;

    &:before {
      content: "";
      position: absolute;
      width: 75%;
      height: 75%;
      top: 1px;
      left: 50%;
      transform: translate(-50%, 0%);
      background: rgba(255, 255, 255, 0.4);
      border-radius: 3px;
    }
    &:hover {
      cursor: pointer;
      box-shadow: 0 0 0px 2px #5c6aff;
    }
  }
}
</style>
