function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
    let numberOfStudents: number = 0;

    for (let index = 0; index <endTime.length; index++){
        if (endTime[index] >= queryTime && queryTime >= startTime[index]) {
            numberOfStudents++
        }
    }
    return numberOfStudents;
};