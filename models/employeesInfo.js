module.exports = function (sequelize, Sequelize) {
  let EmployeeInfo = sequelize.define(
    "EmployeeInfo",
    {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      middleName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dateOfJoining: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      dateOfBirth: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      personalEmail: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      personalPhoneNumber: {
        type: Sequelize.STRING(10),
        unique: true,
        allowNull: false,
      },
      emergencyPhoneNumber: {
        type: Sequelize.STRING(10),
      },
      panNumber: {
        type: Sequelize.STRING(10),
        unique: true,
        allowNull: false,
      },
      aadharNumber: {
        type: Sequelize.STRING(12),
        unique: true,
        allowNull: false,
      },
      passportNo: {
        type: Sequelize.STRING(8),
      },
      passportExpiryDate: {
        type: Sequelize.DATE,
      },
      providentfundNo: {
        type: Sequelize.STRING,
      },
      uanNo: {
        type: Sequelize.STRING,
      },
      esiNo: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.ENUM("male", "female", "other"),
      },
      fatherName: {
        type: Sequelize.STRING,
      },
      motherName: {
        type: Sequelize.STRING,
      },
      spouseName: {
        type: Sequelize.STRING,
      },
      bloodGroup: {
        type: Sequelize.ENUM(
          "o_positive",
          "o_negative",
          "a_positive",
          "a_negative",
          "b_postive",
          "b_negative",
          "ab_positive",
          "ab_negative",
          "other"
        ),
      },
      maritalStatus: {
        type: Sequelize.ENUM("single", "married"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
      },
    },
    {
      freezeTableName: true,
      tableName: "employees_info",
      underscored: true,
    }
  );

  EmployeeInfo.associate = function (models) {
    EmployeeInfo.belongsTo(models["Employee"]);
    EmployeeInfo.hasOne(models["EmployeeBankDetail"]);
    EmployeeInfo.hasMany(models["EmployeeEducationHistory"]);
    EmployeeInfo.hasMany(models["EmployeeAddress"]);
  };
  return EmployeeInfo;
};
