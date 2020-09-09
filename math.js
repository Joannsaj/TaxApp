function myTax(salary) {
    if (salary < 24000) {
        return 0.1 * salary;
    }
    else if (salary < 40666.67) {
        return 0.15 * salary;
    }
    else if (salary < 57333.33) {
        return 0.20 * salary;
    }
    else {
        return (0.2 * 57333.33) + (0.25 * (salary - 57333.33));
    }
}