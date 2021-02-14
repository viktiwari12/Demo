#include <iostream>
using namespace std;
/* Question 
You are given an array A with size N (indexed from 0) and an integer K. Let's define another array B with size N · K as the array that's formed by concatenating K copies of array A.

For example, if A = {1, 2} and K = 3, then B = {1, 2, 1, 2, 1, 2}.

You have to find the maximum subarray sum of the array B. Fomally, you should compute the maximum value of Bi + Bi+1 + Bi+2 + ... + Bj, where 0 ≤ i ≤ j < N · K.

Input
The first line of the input contains a single integer T denoting the number of test cases. The description of T test cases follows.
The first line of each test case contains two space-separated integers N and K.
The second line contains N space-separated integers A0, A1, ..., AN-1.
Output
For each test case, print a single line containing the maximum subarray sum of B.

Constraints
1 ≤ T ≤ 10
1 ≤ N ≤ 105
1 ≤ K ≤ 105
-106 ≤ Ai ≤ 106 for each valid i
Subtasks
Subtask #1 (18 points): N · K ≤ 105

Subtask #2 (82 points): original constraints

Example
Input:

2
2 3
1 2
3 2
1 -2 1

Output:

9
2 */
int main ()
{
    int T ;
    cin>>T;
    for( int a = 1; a<= T; a++)
    {
        int N, K; 
        cin>>N>>K;

        int arr[100000];
        for( int b = 0 ; b < N; b++)
        {
            cin>>arr[b];
        }
    
        int new_size = N*K;
        int new_arr[new_size];

        for( int i = 0 ; i <  new_size ; i++)
        {
            new_arr[i] = arr[ i% n];
        }

        // now let's calculate the maximum subarray sum 

        int positive_sum = new_arr[0];
        int sum = 0 ;

    
        for (int j = 1; j < new_size; j++)
        {
            if(positive_sum < 0 )
            {
                positive_sum = new_arr[j] ;
            }
            else
            {
                positive_sum += new_arr[j];
            }
        
            if(positive_sum >= sum)
            {
                sum = positive_sum; 
            }
        }
        cout<<positive_sum<<endl;
        cout<<"Maximum subarray sum is    "<<sum;
    }
}