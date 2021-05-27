"" + 1 + 0 = "10" // + một string, đổi 1 thành string => 0 -> "0",
"" - 1 + 0 = -1 // chuyển string "" = 0
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // giống hàng đầu tiên. 5 -> "5"
"  -9  " - 5 = -14 // phép - bị chuyển thành number
null + 1 = 1 // null = 0 -> research + devtools
undefined + 1 = NaN // research + devtools
" \t \n" - 2 = -2 // 