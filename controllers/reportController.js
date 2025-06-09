const Student = require("../models/Student");
const StudentFee = require("../models/StudentFee");
const FeeType = require("../models/FeeType");
const Class = require("../models/Class");
const Quarter = require("../models/Quarter");
const exportToCSV = require("../utils/exportToCSV");

exports.renderReports = async (req, res) => {
  const classes = await Class.find();
  const quarters = await Quarter.find();
  res.render("pages/admin/reports/index", { classes, quarters, data: null });
};

exports.generateReport = async (req, res) => {
  const { classId, quarterId, exportType } = req.body;

  const filters = {};
  if (classId) filters.classId = classId;
  if (quarterId) filters.quarterId = quarterId;

  const records = await StudentFee.find(filters)
    .populate("student feeType classId quarterId")
    .sort({ status: 1 });

  if (exportType === "csv") {
    const csvData = records.map(r => ({
      Student: r.student.name,
      Class: r.classId.className,
      FeeType: r.feeType.name,
      Amount: r.feeType.amount,
      Quarter: r.quarterId.name,
      Status: r.status,
      PaidAt: r.paidAt ? r.paidAt.toDateString() : "Unpaid"
    }));

    const filename = `Fee_Report_${Date.now()}.csv`;
    exportToCSV(res, csvData, filename);
    return;
  }

  const classes = await Class.find();
  const quarters = await Quarter.find();

  res.render("pages/admin/reports/index", {
    classes,
    quarters,
    data: records,
    selectedClass: classId,
    selectedQuarter: quarterId
  });
};