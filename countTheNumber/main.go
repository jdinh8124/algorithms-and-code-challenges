func countConsistentStrings(allowed string, words []string) int {
    stringPassed := 0;
    newMap := make(map[string]bool)
    
    for _, item := range allowed {
        stringified := string(item)
        if (newMap[stringified] != true) {
            newMap[stringified] = true
        }
    }
    
    for _, item := range words {
        for index, stringItem := range item {
            stringifiedLetter := string(stringItem)
            if (newMap[stringifiedLetter] != true) {
                break
            }
            
            if (index == len(item) - 1) {
                stringPassed++
            }
        }
    }
    
    return stringPassed
}