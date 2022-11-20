# Node.js (Express) app's benchmark

## Simple endpoint

```
ab -n 1000 -c 100 http://localhost:3000/
This is ApacheBench, Version 2.3 <$Revision: 1901567 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 100 requests
Completed 200 requests
Completed 300 requests
Completed 400 requests
Completed 500 requests
Completed 600 requests
Completed 700 requests
Completed 800 requests
Completed 900 requests
Completed 1000 requests
Finished 1000 requests


Server Software:
Server Hostname:        localhost
Server Port:            3000

Document Path:          /
Document Length:        12 bytes

Concurrency Level:      100
Time taken for tests:   0.318 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      211000 bytes
HTML transferred:       12000 bytes
Requests per second:    3140.09 [#/sec] (mean)
Time per request:       31.846 [ms] (mean)
Time per request:       0.318 [ms] (mean, across all concurrent requests)
Transfer rate:          647.03 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    2   1.9      2       9
Processing:     5   29   6.1     29      41
Waiting:        1   17   5.7     17      34
Total:          5   31   7.1     31      47

Percentage of the requests served within a certain time (ms)
  50%     31
  66%     33
  75%     35
  80%     35
  90%     39
  95%     46
  98%     46
  99%     46
 100%     47 (longest request)
```

## Sleeping endpoint

```
ab -n 1000 -c 100 http://localhost:3000/sleep
This is ApacheBench, Version 2.3 <$Revision: 1901567 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 100 requests
Completed 200 requests
Completed 300 requests
Completed 400 requests
Completed 500 requests
Completed 600 requests
Completed 700 requests
Completed 800 requests
Completed 900 requests
Completed 1000 requests
Finished 1000 requests


Server Software:
Server Hostname:        localhost
Server Port:            3000

Document Path:          /sleep
Document Length:        15 bytes

Concurrency Level:      100
Time taken for tests:   11.219 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      214000 bytes
HTML transferred:       15000 bytes
Requests per second:    89.14 [#/sec] (mean)
Time per request:       1121.869 [ms] (mean)
Time per request:       11.219 [ms] (mean, across all concurrent requests)
Transfer rate:          18.63 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    2   1.1      2       5
Processing:  1002 1017   5.7   1019    1028
Waiting:     1001 1013   4.5   1013    1023
Total:       1003 1019   6.1   1021    1029

Percentage of the requests served within a certain time (ms)
  50%   1021
  66%   1023
  75%   1024
  80%   1025
  90%   1025
  95%   1026
  98%   1026
  99%   1028
 100%   1029 (longest request)
 ```

## Database access endpoint (simple and many queries, for example, N+1 problem)

```
ab -n 1000 -c 100 http://localhost:3000/database
This is ApacheBench, Version 2.3 <$Revision: 1901567 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 100 requests
Completed 200 requests
Completed 300 requests
Completed 400 requests
Completed 500 requests
Completed 600 requests
Completed 700 requests
Completed 800 requests
Completed 900 requests
Completed 1000 requests
Finished 1000 requests


Server Software:
Server Hostname:        localhost
Server Port:            3000

Document Path:          /database
Document Length:        30 bytes

Concurrency Level:      100
Time taken for tests:   2.747 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      230000 bytes
HTML transferred:       30000 bytes
Requests per second:    364.00 [#/sec] (mean)
Time per request:       274.726 [ms] (mean)
Time per request:       2.747 [ms] (mean, across all concurrent requests)
Transfer rate:          81.76 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   1.0      0       5
Processing:    27  263  60.9    239     435
Waiting:       23  261  60.8    238     434
Total:         28  263  60.8    239     439

Percentage of the requests served within a certain time (ms)
  50%    239
  66%    271
  75%    304
  80%    321
  90%    360
  95%    374
  98%    389
  99%    412
 100%    439 (longest request)
 ```