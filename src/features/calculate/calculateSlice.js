import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  own: {
    cash: {
      inHand: 0,
      inBank: 0,
    },
    moneOwed: {
      loan: 0,
      expected: 0,
    },
    goldAndSilver: {
      gold: 0,
      silver: 0,
    },
    goldAndSilverVori: {
      goldVori: 0,
      silverVori: 0,
    },
    share: {
      capitalGain: 0,
      other: 0,
    },
    pension: 0,
    businessAsset: {
      cash: 0,
      receivable: 0,
      stock: 0,
    },
  },
  owe: {
    mortgage: 0,
    personalLoan: 0,
    creditCard: 0,
    utilityBill: 0,
    overdraft: 0,
    businessLiabilities: 0,
  },
};

const nisabSlice = createSlice({
  name: "nisab",
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
      state.own.pension = action.payload;
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
      state.owe.mortgage = action.payload;
    },
    updateOwePersonalLoan: (state, action) => {
      state.owe.personalLoan = action.payload;
    },
    updateOweCreditCard: (state, action) => {
      state.owe.creditCard = action.payload;
    },
    updateOweUtilityBill: (state, action) => {
      state.owe.utilityBill = action.payload;
    },
    updateOweOverdraft: (state, action) => {
      state.owe.overdraft = action.payload;
    },
    updateOweBusinessLiabilities: (state, action) => {
      state.owe.businessLiabilities = action.payload;
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
} = nisabSlice.actions;

export default nisabSlice.reducer;
