func interpret(command string) string {
    outPutString := ""
    for i := 0; i < len(command); i++ {
        if string(command[i]) == "G" {
            outPutString = outPutString + "G"
        } else if i+1 < len(command) && string(command[i:i+2]) == "(a" {
            outPutString = outPutString + "al"
            i = i + 3
        } else {
        outPutString = outPutString + "o"
            i++
        }
        
    }
    return outPutString
}