import $ from "jquery";
import { storeurl } from "components/App/storeurl";
$(document).ready(function () {
  //  $(document).on('click','.eye_fontnew',function(){
  //           handleClick();
  //   });
  $(document).on("click", ".btn_status", function () {
    var response = confirm("Are you sure you want to change the status?");
    if (response == true) {
      const id = $(this).attr("data-id");

      $.ajax({
        url: `${storeurl}admin_updatestatus`,
        type: "POST",
        data: { id: id },
        dataType: "json",
        success: function (html) {
          if (html.status == true) {
            alert(html.message);
          } else {
            alert("Status not Changed");
          }
        },
      });
    }
  });

  $(document).on("click", ".add_promocode", function () {
    const new_promocode = $("#new_promocode").val();
    const no_promocode = $("#no_promocode").val();
    const discount_promocode = $("#discount_promocode").val();
    const promo_img = $("#promo_img").val();

    var formData = new FormData();
    formData.append("new_promocode", new_promocode);
    formData.append("no_promocode", no_promocode);
    formData.append("discount_promocode", discount_promocode);
    // Attach file
    formData.append("promo_img[]", $("#promo_img")[0].files[0]);
    console.log($("#promo_img")[0].files[0]);
    $.ajax({
      url: `${storeurl}admin_addpromocode`,
      type: "POST",
      enctype: "multipart/form-data",
      data: formData,
      contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
      processData: false, // NEEDED, DON'T OMIT THIS
      dataType: "json",
      success: function (html) {
        if (html.status == true) {
          alert(html.message);
          $("#new_promocode").val("");
          $("#no_promocode").val("");
          $("#discount_promocode").val("");
        } else {
          alert("Promocode not Added");
        }
      },
    });
  });

  $(document).on("click", ".update_record", function () {
    const new_useremail = $("#new_useremail").val();
    const new_userpass = $("#new_userpass").val();
    const new_userid = $("#new_userid").val();
    $.ajax({
      url: `${storeurl}admin_updatesetting`,
      type: "POST",
      data: {
        new_useremail: new_useremail,
        new_userpass: new_userpass,
        new_userid: new_userid,
      },
      dataType: "json",
      success: function (html) {
        if (html.status == true) {
          $("#new_userpass").val("");
          alert(html.message);
          $("#new_userpass").val("");
        } else {
          alert(html.message);
          //alert("Setting not Updated");
        }
      },
    });
  });

  $(document).on("click", ".settingdata", function () {
    if ($(".submenu_setting").hasClass("open")) {
      $(".submenu_setting").removeClass("open");
      $(".submenu_setting").addClass("close");
      $(".submenu_setting").hide();
      $(".submenu_setting").slideUp("slow");
    } else if ($(".submenu_setting").hasClass("close")) {
      $(".submenu_setting").removeClass("close");
      $(".submenu_setting").addClass("open");
      $(".submenu_setting").show();
      $(".submenu_setting").slideDown("slow");
    }
  });

  $(document).on("click", ".user_management", function () {
    if ($(".user_managementsetting").hasClass("open1")) {
      $(".user_managementsetting").removeClass("open1");
      $(".user_managementsetting").addClass("close1");
      $(".user_managementsetting").hide();
      $(".user_managementsetting").slideUp("slow");
    } else if ($(".user_managementsetting").hasClass("close1")) {
      $(".user_managementsetting").removeClass("close1");
      $(".user_managementsetting").addClass("open1");
      $(".user_managementsetting").show();
      $(".user_managementsetting").slideDown("slow");
    }
  });

  // $(document).on("click", ".dashboard_td8", function () {
  // 	if ($(".dashboard_collapse8").hasClass("open9")) {
  // 		$(".dashboard_collapse8").removeClass("open9");
  // 		$(".dashboard_collapse8").addClass("close9");
  // 		$(".dashboard_collapse8").hide();
  // 		$(".dashboard_collapse8").slideUp("slow");
  // 		$(".right_arrow8").show();
  // 		$(".down_arrow8").hide();
  // 	} else if ($(".dashboard_collapse8").hasClass("close9")) {
  // 		$(".dashboard_collapse8").removeClass("close9");
  // 		$(".dashboard_collapse8").addClass("open9");
  // 		$(".dashboard_collapse8").show();
  // 		$(".dashboard_collapse8").slideDown("slow");
  // 		$(".right_arrow8").hide();
  // 		$(".down_arrow8").show();
  // 	}
  // });

  // $(document).on("click", ".dashboard_td9", function () {
  // 	if ($(".dashboard_collapse9").hasClass("open10")) {
  // 		$(".dashboard_collapse9").removeClass("open10");
  // 		$(".dashboard_collapse9").addClass("close10");
  // 		$(".dashboard_collapse9").hide();
  // 		$(".dashboard_collapse9").slideUp("slow");
  // 		$(".right_arrow9").show();
  // 		$(".down_arrow9").hide();
  // 	} else if ($(".dashboard_collapse9").hasClass("close10")) {
  // 		$(".dashboard_collapse9").removeClass("close10");
  // 		$(".dashboard_collapse9").addClass("open10");
  // 		$(".dashboard_collapse9").show();
  // 		$(".dashboard_collapse9").slideDown("slow");
  // 		$(".right_arrow9").hide();
  // 		$(".down_arrow9").show();
  // 	}
  // });

  // $(document).on("click", ".dashboard_td10", function () {
  // 	if ($(".dashboard_collapse10").hasClass("open11")) {
  // 		$(".dashboard_collapse10").removeClass("open11");
  // 		$(".dashboard_collapse10").addClass("close11");
  // 		$(".dashboard_collapse10").hide();
  // 		$(".dashboard_collapse10").slideUp("slow");
  // 		$(".right_arrow10").show();
  // 		$(".down_arrow10").hide();
  // 	} else if ($(".dashboard_collapse10").hasClass("close11")) {
  // 		$(".dashboard_collapse10").removeClass("close11");
  // 		$(".dashboard_collapse10").addClass("open11");
  // 		$(".dashboard_collapse10").show();
  // 		$(".dashboard_collapse10").slideDown("slow");
  // 		$(".right_arrow10").hide();
  // 		$(".down_arrow10").show();
  // 	}
  // });

  $(document).on("click", "#submit_form", function () {
    var select_role = $(".select_role").val();
    var first_name = $(".first_name").val();
    var password = $(".password").val();
    var mobile_no = $(".mobile_no").val();
    var email = $(".email").val();
    if (
      select_role != 0 &&
      first_name != "" &&
      password != "" &&
      mobile_no != "" &&
      email != ""
    ) {
      $.ajax({
        url: `${storeurl}admin_adduser`,
        type: "POST",
        data: {
          select_role: select_role,
          first_name: first_name,
          password: password,
          mobile_no: mobile_no,
          email: email,
        },
        dataType: "json",
        success: function (html) {
          alert(html.message);
          $(".first_name").val("");
          $(".password").val("");
          $(".mobile_no").val("");
          $(".email").val("");
        },
      });
    } else {
      alert("Fill all Fields");
    }
  });

  $(document).on("click", "#edit_userform", function () {
    var select_role = $(".select_role").val();
    var first_name = $(".first_name").val();
    var password = parseInt($(".password").val());
    var mobile_no = $(".mobile_no").val();
    var email = $(".email").val();
    var id = $(this).attr("data-id");

    if (first_name != "" && mobile_no != "" && email != "") {
      $.ajax({
        url: `${storeurl}admin_edituser`,
        type: "POST",
        data: {
          select_role: select_role,
          first_name: first_name,
          password: password,
          mobile_no: mobile_no,
          email: email,
          id: id,
        },
        dataType: "json",
        success: function (html) {
          alert(html.message);
        },
      });
    } else {
      alert("Fill all Fields");
    }
  });

  $(document).on("click", "#addrole_form", function () {
    var role_name = $(".role_name").val();
    var privilages = new Array();
    if (role_name != "") {
      $(".checkbox_newval:checkbox:checked").each(function () {
        privilages.push($(this).val());
      });

      $.ajax({
        url: `${storeurl}admin_addrole`,
        type: "POST",
        data: { role_name: role_name, privilages: privilages },
        dataType: "json",
        success: function (html) {
          alert(html.message);
          $(".role_name").val("");
          $(".checkbox_newval:checkbox:checked").each(function () {
            $(this).prop("checked", false);
          });

          $(".parentcheckbox_newval:checkbox:checked").each(function () {
            $(this).prop("checked", false);
          });
        },
      });
    } else {
      alert("Add role name");
    }
  });

  $(document).on("change", "#dashboard", function () {
    if ($(this).prop("checked")) {
      $(".chk").prop("checked", true);
    } else {
      $(".chk").prop("checked", false);
    }
  });

  $(document).on("change", "#dashboard2", function () {
    if ($(this).prop("checked")) {
      $(".chk2").prop("checked", true);
    } else {
      $(".chk2").prop("checked", false);
    }
  });

  $(document).on("change", "#dashboard3", function () {
    if ($(this).prop("checked")) {
      $(".chk3").prop("checked", true);
    } else {
      $(".chk3").prop("checked", false);
    }
  });

  $(document).on("change", "#dashboard4", function () {
    if ($(this).prop("checked")) {
      $(".chk4").prop("checked", true);
    } else {
      $(".chk4").prop("checked", false);
    }
  });

  $(document).on("change", "#dashboard5", function () {
    if ($(this).prop("checked")) {
      $(".chk5").prop("checked", true);
    } else {
      $(".chk5").prop("checked", false);
    }
  });

  $(document).on("click", ".driver_detailbtn", function () {
    var id = $(this).attr("data-id");
    $(".change_driver").attr("data-id", id);
  });
  $(document).on("click", ".mynewtick", function () {
    var result = confirm("Are you sure you want to change status?");
    if (result == true) {
      var id = $(this).attr("data-id");
      $.ajax({
        url: `${storeurl}admin_updateuserstatus`,
        type: "POST",
        data: { id: id },
        dataType: "json",
        success: function (html) {
          alert(html.message);
        },
      });
    }
  });

  $(document).on("click", ".change_driver", function () {
    var id = $(this).attr("data-id");
    var selectedValue = $(".select_driver").val();
    $.ajax({
      url: `${storeurl}adminupdatedriver`,
      type: "POST",
      data: { id: id, selectedValue: selectedValue },
      dataType: "json",
      success: function (html) {
        alert(html.message);
      },
    });
  });

  $(document).on("click", ".edit_price", function () {
    var packageprice = $("#packageprice").val();
    var id = $(this).attr("data-id");
    $.ajax({
      url: `${storeurl}admin_updatepackagesprice`,
      type: "POST",
      data: { packageprice: packageprice, package_id: id },
      dataType: "json",
      success: function (html) {
        if (html.status == true) {
          alert(html.message);
        } else {
          alert("Package not Updated");
        }
      },
    });
  });

  $(document).on("click", ".addcsv_btn", function () {
    var table = document.getElementById("myTable");

    // Create an empty CSV string
    var csvString = "";

    // Loop through the rows
    for (var i = 0; i < table.rows.length; i++) {
      var rowData = [];
      // Loop through the cells
      for (var j = 0; j < table.rows[i].cells.length - 1; j++) {
        // Enclose cell content in double quotes to handle commas
        // rowData.push('"' + table.rows[i].cells[j].innerText + '"');
        var cellContent = table.rows[i].cells[j].innerText.replace(/,/g, " ");
        if (j === 2 && cellContent.trim() !== "") {
          cellContent = "'" + cellContent;
        }
        rowData.push(cellContent);
      }
      // Join the row data and add a newline character
      csvString += rowData.join(",") + "\n";
    }

    // Create a Blob containing the CSV data
    var blob = new Blob([csvString], { type: "text/csv;charset=utf-8" });

    // Create a link element
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);

    // Set the filename for the CSV file
    link.download = "table_data.csv";

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
  });

  $(document).on("click", ".tablelistaddcsv_btn", function () {
    var table = document.getElementById("myTable");

    // Create an empty CSV string
    var csvString = "";

    // Loop through the rows
    for (var i = 0; i < table.rows.length; i++) {
      var rowData = [];
      // Loop through the cells
      for (var j = 0; j < table.rows[i].cells.length - 1; j++) {
        // Enclose cell content in double quotes to handle commas
        // rowData.push('"' + table.rows[i].cells[j].innerText + '"');
        var cellContent = table.rows[i].cells[j].innerText.replace(/,/g, " ");
        if (j === 3 && cellContent.trim() !== "") {
          cellContent = "'" + cellContent;
        }
        rowData.push(cellContent);
      }
      // Join the row data and add a newline character
      csvString += rowData.join(",") + "\n";
    }

    // Create a Blob containing the CSV data
    var blob = new Blob([csvString], { type: "text/csv;charset=utf-8" });

    // Create a link element
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);

    // Set the filename for the CSV file
    link.download = "table_data.csv";

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
  });

  $(document).on("click", ".promocodeaddcsv_btn", function () {
    var table = document.getElementById("newexample4");

    // Create an empty CSV string
    var csvString = "";

    // Loop through the rows
    for (var i = 0; i < table.rows.length; i++) {
      var rowData = [];
      // Loop through the cells
      for (var j = 0; j < table.rows[i].cells.length; j++) {
        // Enclose cell content in double quotes to handle commas
        // rowData.push('"' + table.rows[i].cells[j].innerText + '"');
        var cellContent = table.rows[i].cells[j].innerText.replace(/,/g, " ");
        // if (j === 3 && cellContent.trim() !== "") {
        //   cellContent = "'" + cellContent;
        // }
        rowData.push(cellContent);
      }
      // Join the row data and add a newline character
      csvString += rowData.join(",") + "\n";
    }

    // Create a Blob containing the CSV data
    var blob = new Blob([csvString], { type: "text/csv;charset=utf-8" });

    // Create a link element
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);

    // Set the filename for the CSV file
    link.download = "table_data.csv";

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
  });

  $(document).on("click", ".settingaddcsv_btn", function () {
    var table = document.getElementById("newexample9");

    // Create an empty CSV string
    var csvString = "";

    // Loop through the rows
    for (var i = 0; i < table.rows.length; i++) {
      var rowData = [];
      // Loop through the cells
      for (var j = 0; j < table.rows[i].cells.length - 1; j++) {
        // Enclose cell content in double quotes to handle commas
        // rowData.push('"' + table.rows[i].cells[j].innerText + '"');
        var cellContent = table.rows[i].cells[j].innerText.replace(/,/g, " ");
        // if (j === 3 && cellContent.trim() !== "") {
        //   cellContent = "'" + cellContent;
        // }
        rowData.push(cellContent);
      }
      // Join the row data and add a newline character
      csvString += rowData.join(",") + "\n";
    }

    // Create a Blob containing the CSV data
    var blob = new Blob([csvString], { type: "text/csv;charset=utf-8" });

    // Create a link element
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);

    // Set the filename for the CSV file
    link.download = "table_data.csv";

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
  });
});
