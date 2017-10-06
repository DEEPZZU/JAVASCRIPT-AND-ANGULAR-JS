// JavaScript source code
var app = angular.module("myModule", []);
app.controller("firstController", function ($scope)
{
    $scope.message = "Angular Controller trial";
});

app.controller("printController", function ($scope) {
    var list =
        [
            { firstName: "Ankita" , lastName: "Sharma", gender: "Female", salary: "6000000" },
            { firstName: "Deep", lastName: "Prakash", gender: "Male", salary: "60000000" },
            { firstName: "Nikita", lastName: "Kumari", gender: "Female", salary: "2344353" },
            { firstName: "Kanan", lastName: "Gill", gender: "Male", salary: "3453464" },
            { firstName: "Aditya", lastName: "Kapoor", gender: "Male", salary: "345346" }

        ];

    $scope.employees=list;
});