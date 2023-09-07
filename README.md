# RevoU Practice Session

## Pseudocode 1:

Write a pseudocode for this problem statement:

> Given a string, write code that returns true or false depending on whether it contains any vowels. Vowel characters are "a", "i", "u", "e", "o". The string might be a mix of capital letters.



```javascript
START
FUNCTION vowelDetection(input): String
    IF input MATCHES REGEX(`^[aeiouAEIOU]+$`)
        RETURN true
    ELSE
        RETURN false
    END IF
END FUNCTION
END
```

## Pseudocode 2:

Write a pseudocode for this problem statement:

> Given an array of numbers. Please return the duplicates in another array, If there are no duplicates, return an empty string



```javascript
START
FUNCTION numberDuplicateChecker(input[]): ArrayOfNumber
    DECLARE numberTmp[], arrayOutput[]
    LOOP FOR each input[]
        IF input[n] == numberTmp[n]
            arrayOutput[] += input[n]
        ELSE
            numberTmp[n] = input[n]
        END IF
    END LOOP
    RETURN arrayOutput[]
END FUNCTION
END
```


