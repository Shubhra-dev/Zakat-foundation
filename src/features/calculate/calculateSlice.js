import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  own: {
    cash: {
      active: false,
      inHand: 0,
      inBank: 0,
    },
    moneOwed: {
      active: false,
      loan: 0,
      expected: 0,
    },
    goldAndSilver: {
      active: false,
      gold: 0,
      silver: 0,
    },
    goldAndSilverVori: {
      active: false,
      goldVori: 0,
      silverVori: 0,
    },
    share: {
      active: false,
      capitalGain: 0,
      other: 0,
    },
    pension: { active: false, value: 0 },
    businessAsset: {
      active: false,
      cash: 0,
      receivable: 0,
      stock: 0,
    },
  },
  owe: {
    mortgage: { active: false, value: 0 },
    personalLoan: { active: false, value: 0 },
    creditCard: { active: false, value: 0 },
    utilityBill: { active: false, value: 0 },
    overdraft: { active: false, value: 0 },
    businessLiabilities: { active: false, value: 0 },
  },
};
const resetOwnValues = (state, key) => {
  switch (key) {
    case "cash":
      return { ...state, inHand: 0, inBank: 0 };
    case "moneOwed":
      return { ...state, loan: 0, expected: 0 };
    case "goldAndSilver":
      return { ...state, gold: 0, silver: 0 };
    case "goldAndSilverVori":
      return { ...state, goldVori: 0, silverVori: 0 };
    case "share":
      return { ...state, capitalGain: 0, other: 0 };
    case "pension":
      return { ...state, value: 0 };
    case "businessAsset":
      return { ...state, cash: 0, receivable: 0, stock: 0 };
    default:
      return state;
  }
};

const resetOweValues = (state) => {
  return { ...state, value: 0 };
};

const calculateSlice = createSlice({
  name: "calculate",
  initialState,
  reducers: {
    updateOwnCashInHand: (state, action) => {
      state.own.cash.inHand = action.payload;
    },
    updateOwnCashInBank: (state, action) => {
      state.own.cash.inBank = action.payload;
    },
    updateOwnMoneOwedLoan: (state, action) => {
      state.own.moneOwed.loan = action.payload;
    },
    updateOwnMoneOwedExpected: (state, action) => {
      state.own.moneOwed.expected = action.payload;
    },
    updateOwnGold: (state, action) => {
      state.own.goldAndSilver.gold = action.payload;
    },
    updateOwnSilver: (state, action) => {
      state.own.goldAndSilver.silver = action.payload;
    },
    updateOwnGoldVori: (state, action) => {
      state.own.goldAndSilverVori.goldVori = action.payload;
    },
    updateOwnSilverVori: (state, action) => {
      state.own.goldAndSilverVori.silverVori = action.payload;
    },
    updateOwnShareCapitalGain: (state, action) => {
      state.own.share.capitalGain = action.payload;
    },
    updateOwnShareOther: (state, action) => {
      state.own.share.other = action.payload;
    },
    updateOwnPension: (state, action) => {
      state.own.pension.value = action.payload;
    },
    updateOwnBusinessAssetCash: (state, action) => {
      state.own.businessAsset.cash = action.payload;
    },
    updateOwnBusinessAssetReceivable: (state, action) => {
      state.own.businessAsset.receivable = action.payload;
    },
    updateOwnBusinessAssetStock: (state, action) => {
      state.own.businessAsset.stock = action.payload;
    },
    updateOweMortgage: (state, action) => {
      state.owe.mortgage.value = action.payload;
    },
    updateOwePersonalLoan: (state, action) => {
      state.owe.personalLoan.value = action.payload;
    },
    updateOweCreditCard: (state, action) => {
      state.owe.creditCard.value = action.payload;
    },
    updateOweUtilityBill: (state, action) => {
      state.owe.utilityBill.value = action.payload;
    },
    updateOweOverdraft: (state, action) => {
      state.owe.overdraft.value = action.payload;
    },
    updateOweBusinessLiabilities: (state, action) => {
      state.owe.businessLiabilities.value = action.payload;
    },
    updateActive: (state, action) => {
      const key = action.payload;
      const entity = state.own[key];

      if (entity) {
        entity.active = !entity.active;
        if (!entity.active) {
          state.own[key] = resetOwnValues(entity, key);
        }
      }
    },
    updateOweActive: (state, action) => {
      const key = action.payload;
      const entity = state.owe[key];

      if (entity) {
        entity.active = !entity.active;
        if (!entity.active) {
          state.owe[key] = resetOweValues(entity);
        }
      }
    },
  },
});

export const {
  updateOwnCashInHand,
  updateOwnCashInBank,
  updateOwnMoneOwedLoan,
  updateOwnMoneOwedExpected,
  updateOwnGold,
  updateOwnSilver,
  updateOwnShareCapitalGain,
  updateOwnShareOther,
  updateOwnPension,
  updateOwnBusinessAssetCash,
  updateOwnBusinessAssetReceivable,
  updateOwnBusinessAssetStock,
  updateOweMortgage,
  updateOwePersonalLoan,
  updateOweCreditCard,
  updateOweUtilityBill,
  updateOweOverdraft,
  updateOweBusinessLiabilities,
  updateOwnGoldVori,
  updateOwnSilverVori,
  updateActive,
  updateOweActive,
} = calculateSlice.actions;

export default calculateSlice.reducer;
