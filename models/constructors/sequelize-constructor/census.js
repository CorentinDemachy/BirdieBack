const Sequelize = require('sequelize');

function censusConstructor(sequelize) {
  return sequelize.define('census_learn_sql', {
    age: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    class_of_worker: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    industry_code: {
      type: Sequelize.INTEGER,
      allowNull: false,

    },
    occupation_code: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    education: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    wage_per_hour: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    last_eductaion: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    marital_status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    major_industry_code: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    major_occupation_code: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    mace: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    hispanice: {
      type: Sequelize.STRING,
      allowNull: false,

    },
    sex: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    member_of_labor: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    reason_for_unemployment: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    fulltime: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    capital_gain: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    capital_loss: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dividends: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    income_tax_liability: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    previous_residence_region: {
      type: Sequelize.STRING,
      allowNull: false,

    },
    previous_residence_state: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    household_with_family: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    household_simple: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    weight: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    msa_change: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    reg_change: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lived_here: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    migration_prev_res_in_sunbelt: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    w: {
      type: Sequelize.INTEGER,
      allowNull: false,

    },
    family_members_under_118: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    father_birth_country: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    mother_birth_country: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    birth_country: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    citizenship: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    own_business_or_self_employed: {
      type: Sequelize.TINYINT,
      allowNull: false,
    },
    fill_questionnaire_for_veteran_s_admin: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    veterans_benefits: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    weeks_worked_in_year: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    year: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    salary_range: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
    tableName: 'census_learn_sql',
  });
}

module.exports = censusConstructor;
