def solution(num_list, n):
    answer = []
    # arr = [[0] * n for _ in range(len(num_list)//n)]
    # index = 0
    # for i in range(n) :
    #     for j in range(len(num_list)//n):
    #         arr[i, j] = num_list[index]
    #         index += 1
    # print(arr)
    i = 0;
    while i< len(num_list):
        answer.append(num_list[i:i+n])
        i += n
            
    return answer