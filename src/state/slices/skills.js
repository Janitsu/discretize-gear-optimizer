import { createSelector, createSlice } from '@reduxjs/toolkit';
import { allClassModifiersById } from '../../assets/modifierdata';
import { changeAll, changeProfession, setBuildTemplate } from './controlsSlice';

export const skillsSlice = createSlice({
  name: 'skills',
  initialState: {
    skills: {},
  },
  reducers: {
    toggleSkill: (state, action) => {
      const { id, enabled } = action.payload;

      if (enabled) {
        const itemData = allClassModifiersById[id];
        state.skills[id] = itemData?.amountData ? { amount: '' } : {};
      } else {
        delete state.skills[id];
      }
    },
    setSkillAmount: (state, action) => {
      const { id, amount } = action.payload;

      state.skills[id] = { ...state.skills[id], amount };
    },
    changeSkills: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: {
    [changeAll]: (state, action) => {
      return { ...state, ...action.payload?.form?.skills };
    },
    [changeProfession]: (state, action) => {
      if (state.profession !== action.payload) {
        return {
          ...state,
          skills: {},
        };
      }
    },
    [setBuildTemplate]: (state, action) => {
      const { skillsPreset = {} } = action.payload;
      return { ...state, ...skillsPreset };
    },
  },
});

export const getSkills = (state) => state.optimizer.form.skills.skills;

export const getSkillsModifiers = createSelector(
  (state) => state.optimizer.form.skills,
  (skills) => {
    const result = [];
    Object.entries(skills.skills).forEach(([id, value]) => {
      const itemData = allClassModifiersById[id];
      if (!itemData) return;

      result.push({ id, ...itemData, amount: value?.amount });
    });
    return result;
  },
);

export const { toggleSkill, setSkillAmount, changeSkills } = skillsSlice.actions;
