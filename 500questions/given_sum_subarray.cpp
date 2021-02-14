#include <iostream>
using namespace std;
/* QUESTION 
Find subarray with given sum | Set 1 (Nonnegative Numbers)
Last Updated: 30-10-2020
Given an unsorted array of nonnegative integers, find a continuous subarray which adds to a given number.
Examples :

Input: arr[] = {1, 4, 20, 3, 10, 5}, sum = 33
Ouptut: Sum found between indexes 2 and 4
Sum of elements between indices
2 and 4 is 20 + 3 + 10 = 33

Input: arr[] = {1, 4, 0, 0, 3, 10, 5}, sum = 7
Ouptut: Sum found between indexes 1 and 4
Sum of elements between indices
1 and 4 is 4 + 0 + 0 + 3 = 7

Input: arr[] = {1, 4}, sum = 0
Output: No subarray found
There is no subarray with 0 sum
*/
int main()
{
    int n ;
    cin>>n;
    int arr[10000];
    for(int i = 0 ; i < n ; i++)
    {
        cin>>arr[i];
    }

    int target ;
    cin>>target;

    // now apply kadan's algorithm 

    int positive_sum = arr[0];

    int start_idx = 0;
    int last_idx = 0;

    for (int j = 1; j < n ; j++)
    {
        if (positive_sum < 0 )
        {
            positive_sum = arr[j];
            start_idx = j;
            last_idx = j;
        }
        else if(positive_sum < target)
        {
            positive_sum += arr[j];
            last_idx = j;
        }
        else
        {
            break;
        }
        
    }

    cout<<"Sum of elements between indices     "<<start_idx<<"    and    "<<last_idx;

}