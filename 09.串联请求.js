// 

const fn = (tasklist, retries) => {
    let initialP = Promise.resolve()

    for (let i = 0; i < tasklist.length; i++) {
        initialP = initialP.then(() => {
            let attempts = 0
            const execute = () => {
                return tasklist[i]()
                    .then(res => console.log(res))
                    .catch(err => {
                        attempts++

                        if (attempts > retries) {
                            // console.log(`请求终止`)
                            //中断后续任务
                            throw new Error(`Task ${i + 1} failed after maximum retries.请求终止`);
                        } else {
                            console.log(`失败${attempts}/${retries}次，重试....`)
                            return execute()
                        }
                    }
                    )
            }
            return execute()
        }
        )
    }
    return initialP
}

// 示例任务
const task1 = () => new Promise((resolve, reject) => {
    console.log('Running task 1');
    if (Math.random() > 0.8) {
        resolve('Task 1 success');
    } else {
        reject(new Error('Task 1 failure'));
    }
});

const task2 = () => new Promise((resolve, reject) => {
    console.log('Running task 2');
    if (Math.random() > 0.95) {
        resolve('Task 2 success');
    } else {
        reject(new Error('Task 2 failure'));
    }
});

const task3 = () => new Promise((resolve, reject) => {
    console.log('Running task 3');
    if (Math.random() > 0.3) {
        resolve('Task 3 success');
    } else {
        reject(new Error('Task 3 failure'));
    }
});

// 使用示例
const taskList = [task1, task2, task3];
const retries = 3;

fn(taskList, retries)
    .then(() => {
        console.log('All tasks completed successfully.');
    })
    .catch((error) => {
        console.error('Error running tasks:', error);
    });