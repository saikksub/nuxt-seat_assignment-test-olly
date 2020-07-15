export const state = () => ({
  seats: [
    [
      {
        row: 0,
        col: 1,
        filled: true,
        seat_number: "0, 1",
        user: {
          name: "Emmanuel Onyebueke",
          email: "onye@gmail.com"
        }
      },
      {
        row: 0,
        col: 2,
        filled: false,
        seat_number: "0, 2",

        user: {
          name: "Emmanuel Onyebueke",
          email: "onyea@gmail.com"
        }
      },
      {
        row: 0,
        col: 3,
        filled: false,
        seat_number: "0, 3",
        user: {
          name: "Emmanuel Onyebueke",
          email: "onyear@gmail.com"
        }
      },
      {
        row: 0,
        col: 4,
        filled: false,
        seat_number: "0, 4",

        user: {
          name: "Emmanuel Onyebueke",
          email: "onyerin@gmail.com"
        }
      },
      {
        row: 0,
        col: 5,
        filled: false,
        seat_number: "0, 5",

        user: {
          name: "Emmanuel Onyebueke",
          email: "Olly@gmail.com"
        }
      },
      {
        row: 0,
        col: 6,
        filled: true,
        seat_number: "0, 6",

        user: {
          name: "Emmanuel Onyebueke",
          email: "ollyemma@gmail.com"
        }
      },
      {
        row: 0,
        col: 7,
        filled: true,
        seat_number: "0, 7",

        user: {
          name: "Emmanuel Onyebueke",
          email: "emmanuel@gmail.com"
        }
      }
    ],
    [
      {
        row: 1,
        col: 1,
        filled: false,
        seat_number: "1, 1",

        user: {
          name: "Emmanuel Onyebueke",
          email: "onye@gmail.com"
        }
      },
      {
        row: 1,
        col: 2,
        filled: false,
        seat_number: "1, 2",

        user: {
          name: "Emmanuel Onyebueke",
          email: "onyea@gmail.com"
        }
      },
      {
        row: 1,
        col: 3,
        filled: false,
        seat_number: "1, 3",

        user: {
          name: "Emmanuel Onyebueke",
          email: "onyear@gmail.com"
        }
      },
      {
        row: 1,
        col: 4,
        filled: true,
        seat_number: "1, 4",
        user: {
          name: "Emmanuel Onyebueke",
          email: "onyerin@gmail.com"
        }
      },
      {
        row: 1,
        col: 5,
        filled: true,
        seat_number: "1, 5",
        user: {
          name: "Emmanuel Onyebueke",
          email: "Olly@gmail.com"
        }
      },
      {
        row: 1,
        col: 6,
        filled: false,
        seat_number: "1, 6",

        user: {
          name: "Emmanuel Onyebueke",
          email: "ollyemma@gmail.com"
        }
      },
      {
        row: 1,
        col: 7,
        filled: false,
        seat_number: "1, 7",

        user: {
          name: "Emmanuel Onyebueke",
          email: "emmanuel@gmail.com"
        }
      }
    ]
  ]
});

export const getters = {
  seats: state => state.seats
};

export const mutations = {
  addASeat(state, seatInfo) {
    const { row, col } = seatInfo;
    state.seats[row][col - 1] = seatInfo;
  }
};

export const actions = {
  bookASeat({ commit }, seatInfo) {
    commit("addASeat", seatInfo);
  }
};
