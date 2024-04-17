import {
  IAllNews,
  IKnownFacts,
  IMainNews,
  IOtherNews,
  IPopularNews,
} from '../app/shared/types';

export const mainNewsMock = [
  {
    date: '12.08.2023',
    category: 'პოლიტიკა',
    heading:
      'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება',
    description:
      'განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/0f26/9f24/bc698191aa69589fa1db7e13b2222fee?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gUZ19rImfHzvKzwqweZxOE5RyscOvz7-aXTPxAxnbu7h1bxa2AkWe5dIo7jiF4XGcxWID7zvawfkl5fIw5Sra0gvMjYarPHGT1Pbvv3aZYI3saAjaJFlAuhCpPUznDLxhFMMVFGw0gleYAUxf3TXkyrI-QJgBabJ9jBgDyQkOwGjQ763JXzniK9Nv-mNu2id0xhyBdUyZyuEVjQWVBV5pX4zigSwj~1XJNW8RKrfQdk7qTag6dFoM5LWDMhAd9vY8BSWH6oIychH~Oz6BmX8stXVZ0jKOGnr3wPZ7mduTZnW1b58nDZJUzVyStk8bYng4HXtZkRD4Y-lhnTjdUcuiA__',
  },
  {
    date: '12.08.2023',
    category: 'პოლიტიკა',
    heading:
      'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება',
    description:
      'განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/0f26/9f24/bc698191aa69589fa1db7e13b2222fee?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gUZ19rImfHzvKzwqweZxOE5RyscOvz7-aXTPxAxnbu7h1bxa2AkWe5dIo7jiF4XGcxWID7zvawfkl5fIw5Sra0gvMjYarPHGT1Pbvv3aZYI3saAjaJFlAuhCpPUznDLxhFMMVFGw0gleYAUxf3TXkyrI-QJgBabJ9jBgDyQkOwGjQ763JXzniK9Nv-mNu2id0xhyBdUyZyuEVjQWVBV5pX4zigSwj~1XJNW8RKrfQdk7qTag6dFoM5LWDMhAd9vY8BSWH6oIychH~Oz6BmX8stXVZ0jKOGnr3wPZ7mduTZnW1b58nDZJUzVyStk8bYng4HXtZkRD4Y-lhnTjdUcuiA__',
  },
  {
    date: '12.08.2023',
    category: 'პოლიტიკა',
    heading:
      'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება',
    description:
      'განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/0f26/9f24/bc698191aa69589fa1db7e13b2222fee?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gUZ19rImfHzvKzwqweZxOE5RyscOvz7-aXTPxAxnbu7h1bxa2AkWe5dIo7jiF4XGcxWID7zvawfkl5fIw5Sra0gvMjYarPHGT1Pbvv3aZYI3saAjaJFlAuhCpPUznDLxhFMMVFGw0gleYAUxf3TXkyrI-QJgBabJ9jBgDyQkOwGjQ763JXzniK9Nv-mNu2id0xhyBdUyZyuEVjQWVBV5pX4zigSwj~1XJNW8RKrfQdk7qTag6dFoM5LWDMhAd9vY8BSWH6oIychH~Oz6BmX8stXVZ0jKOGnr3wPZ7mduTZnW1b58nDZJUzVyStk8bYng4HXtZkRD4Y-lhnTjdUcuiA__',
  },
  {
    date: '12.08.2023',
    category: 'პოლიტიკა',
    heading:
      'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება',
    description:
      'განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/0f26/9f24/bc698191aa69589fa1db7e13b2222fee?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gUZ19rImfHzvKzwqweZxOE5RyscOvz7-aXTPxAxnbu7h1bxa2AkWe5dIo7jiF4XGcxWID7zvawfkl5fIw5Sra0gvMjYarPHGT1Pbvv3aZYI3saAjaJFlAuhCpPUznDLxhFMMVFGw0gleYAUxf3TXkyrI-QJgBabJ9jBgDyQkOwGjQ763JXzniK9Nv-mNu2id0xhyBdUyZyuEVjQWVBV5pX4zigSwj~1XJNW8RKrfQdk7qTag6dFoM5LWDMhAd9vY8BSWH6oIychH~Oz6BmX8stXVZ0jKOGnr3wPZ7mduTZnW1b58nDZJUzVyStk8bYng4HXtZkRD4Y-lhnTjdUcuiA__',
  },
  {
    date: '12.08.2023',
    category: 'პოლიტიკა',
    heading:
      'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება',
    description:
      'განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/0f26/9f24/bc698191aa69589fa1db7e13b2222fee?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gUZ19rImfHzvKzwqweZxOE5RyscOvz7-aXTPxAxnbu7h1bxa2AkWe5dIo7jiF4XGcxWID7zvawfkl5fIw5Sra0gvMjYarPHGT1Pbvv3aZYI3saAjaJFlAuhCpPUznDLxhFMMVFGw0gleYAUxf3TXkyrI-QJgBabJ9jBgDyQkOwGjQ763JXzniK9Nv-mNu2id0xhyBdUyZyuEVjQWVBV5pX4zigSwj~1XJNW8RKrfQdk7qTag6dFoM5LWDMhAd9vY8BSWH6oIychH~Oz6BmX8stXVZ0jKOGnr3wPZ7mduTZnW1b58nDZJUzVyStk8bYng4HXtZkRD4Y-lhnTjdUcuiA__',
  },
  {
    date: '12.08.2023',
    category: 'პოლიტიკა',
    heading:
      'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება',
    description:
      'განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/0f26/9f24/bc698191aa69589fa1db7e13b2222fee?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gUZ19rImfHzvKzwqweZxOE5RyscOvz7-aXTPxAxnbu7h1bxa2AkWe5dIo7jiF4XGcxWID7zvawfkl5fIw5Sra0gvMjYarPHGT1Pbvv3aZYI3saAjaJFlAuhCpPUznDLxhFMMVFGw0gleYAUxf3TXkyrI-QJgBabJ9jBgDyQkOwGjQ763JXzniK9Nv-mNu2id0xhyBdUyZyuEVjQWVBV5pX4zigSwj~1XJNW8RKrfQdk7qTag6dFoM5LWDMhAd9vY8BSWH6oIychH~Oz6BmX8stXVZ0jKOGnr3wPZ7mduTZnW1b58nDZJUzVyStk8bYng4HXtZkRD4Y-lhnTjdUcuiA__',
  },
  {
    date: '12.08.2023',
    category: 'პოლიტიკა',
    heading:
      'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება',
    description:
      'განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/0f26/9f24/bc698191aa69589fa1db7e13b2222fee?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gUZ19rImfHzvKzwqweZxOE5RyscOvz7-aXTPxAxnbu7h1bxa2AkWe5dIo7jiF4XGcxWID7zvawfkl5fIw5Sra0gvMjYarPHGT1Pbvv3aZYI3saAjaJFlAuhCpPUznDLxhFMMVFGw0gleYAUxf3TXkyrI-QJgBabJ9jBgDyQkOwGjQ763JXzniK9Nv-mNu2id0xhyBdUyZyuEVjQWVBV5pX4zigSwj~1XJNW8RKrfQdk7qTag6dFoM5LWDMhAd9vY8BSWH6oIychH~Oz6BmX8stXVZ0jKOGnr3wPZ7mduTZnW1b58nDZJUzVyStk8bYng4HXtZkRD4Y-lhnTjdUcuiA__',
  },
  {
    date: '12.08.2023',
    category: 'პოლიტიკა',
    heading:
      'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება',
    description:
      'განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/0f26/9f24/bc698191aa69589fa1db7e13b2222fee?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gUZ19rImfHzvKzwqweZxOE5RyscOvz7-aXTPxAxnbu7h1bxa2AkWe5dIo7jiF4XGcxWID7zvawfkl5fIw5Sra0gvMjYarPHGT1Pbvv3aZYI3saAjaJFlAuhCpPUznDLxhFMMVFGw0gleYAUxf3TXkyrI-QJgBabJ9jBgDyQkOwGjQ763JXzniK9Nv-mNu2id0xhyBdUyZyuEVjQWVBV5pX4zigSwj~1XJNW8RKrfQdk7qTag6dFoM5LWDMhAd9vY8BSWH6oIychH~Oz6BmX8stXVZ0jKOGnr3wPZ7mduTZnW1b58nDZJUzVyStk8bYng4HXtZkRD4Y-lhnTjdUcuiA__',
  },
  {
    date: '12.08.2023',
    category: 'პოლიტიკა',
    heading:
      'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება',
    description:
      'განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/0f26/9f24/bc698191aa69589fa1db7e13b2222fee?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gUZ19rImfHzvKzwqweZxOE5RyscOvz7-aXTPxAxnbu7h1bxa2AkWe5dIo7jiF4XGcxWID7zvawfkl5fIw5Sra0gvMjYarPHGT1Pbvv3aZYI3saAjaJFlAuhCpPUznDLxhFMMVFGw0gleYAUxf3TXkyrI-QJgBabJ9jBgDyQkOwGjQ763JXzniK9Nv-mNu2id0xhyBdUyZyuEVjQWVBV5pX4zigSwj~1XJNW8RKrfQdk7qTag6dFoM5LWDMhAd9vY8BSWH6oIychH~Oz6BmX8stXVZ0jKOGnr3wPZ7mduTZnW1b58nDZJUzVyStk8bYng4HXtZkRD4Y-lhnTjdUcuiA__',
  },
  {
    date: '12.08.2023',
    category: 'პოლიტიკა',
    heading:
      'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება',
    description:
      'განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/0f26/9f24/bc698191aa69589fa1db7e13b2222fee?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gUZ19rImfHzvKzwqweZxOE5RyscOvz7-aXTPxAxnbu7h1bxa2AkWe5dIo7jiF4XGcxWID7zvawfkl5fIw5Sra0gvMjYarPHGT1Pbvv3aZYI3saAjaJFlAuhCpPUznDLxhFMMVFGw0gleYAUxf3TXkyrI-QJgBabJ9jBgDyQkOwGjQ763JXzniK9Nv-mNu2id0xhyBdUyZyuEVjQWVBV5pX4zigSwj~1XJNW8RKrfQdk7qTag6dFoM5LWDMhAd9vY8BSWH6oIychH~Oz6BmX8stXVZ0jKOGnr3wPZ7mduTZnW1b58nDZJUzVyStk8bYng4HXtZkRD4Y-lhnTjdUcuiA__',
  },
  {
    date: '12.08.2023',
    category: 'პოლიტიკა',
    heading:
      'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება',
    description:
      'განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/0f26/9f24/bc698191aa69589fa1db7e13b2222fee?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gUZ19rImfHzvKzwqweZxOE5RyscOvz7-aXTPxAxnbu7h1bxa2AkWe5dIo7jiF4XGcxWID7zvawfkl5fIw5Sra0gvMjYarPHGT1Pbvv3aZYI3saAjaJFlAuhCpPUznDLxhFMMVFGw0gleYAUxf3TXkyrI-QJgBabJ9jBgDyQkOwGjQ763JXzniK9Nv-mNu2id0xhyBdUyZyuEVjQWVBV5pX4zigSwj~1XJNW8RKrfQdk7qTag6dFoM5LWDMhAd9vY8BSWH6oIychH~Oz6BmX8stXVZ0jKOGnr3wPZ7mduTZnW1b58nDZJUzVyStk8bYng4HXtZkRD4Y-lhnTjdUcuiA__',
  },
] as IMainNews[];

export const allNewsMock = [
  {
    time: '7:30',
    date: '02.01.2023',
    description: 'დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა',
  },
  {
    time: '7:30',
    date: '02.01.2023',
    description: 'დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა',
  },
  {
    time: '7:30',
    date: '02.01.2023',
    description: 'დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა',
  },
  {
    time: '7:30',
    date: '02.01.2023',
    description: 'დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა',
  },
  {
    time: '7:30',
    date: '02.01.2023',
    description: 'დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა',
  },
  {
    time: '7:30',
    date: '02.01.2023',
    description: 'დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა',
  },
] as IAllNews[];

export const popularNewsMock = [
  {
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c051/1868/4e3e239294cad45b2c93c031270a47f0?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G7Aeq2dyYTka0cPlQ7WekIaqCtbq54Nzxnqd68ZYri7BD9loz0ZbBcGM6M3wN4~w0m0F94tqfrdRrNTHBghO9ZkaReM1tJBz-W~glqyRiMaIFNX6IE7U3H5jaJNU~58Q37sM0SWx-bnpCl9wSCLG45cEbT9U-IAJXHdYbFUE5JNU0CjgqO2PhhAd6VeZHob5cG2FRogeAF5zCLAKGhyPgrRJ-RhMJ3QWFuDIWjYaUUF531ZfdXlIfRjCWBcTH01rJzAFGoCAH5BIRLekyvjTqPcKL0J0BwOXtf4elj0apUokC9VmxIZU58CeLRayjvs0wY~NH~x98-MHQvzaRljOiw__',
    description: 'დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა',
  },
  {
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c051/1868/4e3e239294cad45b2c93c031270a47f0?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G7Aeq2dyYTka0cPlQ7WekIaqCtbq54Nzxnqd68ZYri7BD9loz0ZbBcGM6M3wN4~w0m0F94tqfrdRrNTHBghO9ZkaReM1tJBz-W~glqyRiMaIFNX6IE7U3H5jaJNU~58Q37sM0SWx-bnpCl9wSCLG45cEbT9U-IAJXHdYbFUE5JNU0CjgqO2PhhAd6VeZHob5cG2FRogeAF5zCLAKGhyPgrRJ-RhMJ3QWFuDIWjYaUUF531ZfdXlIfRjCWBcTH01rJzAFGoCAH5BIRLekyvjTqPcKL0J0BwOXtf4elj0apUokC9VmxIZU58CeLRayjvs0wY~NH~x98-MHQvzaRljOiw__',
    description: 'დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა',
  },
  {
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c051/1868/4e3e239294cad45b2c93c031270a47f0?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G7Aeq2dyYTka0cPlQ7WekIaqCtbq54Nzxnqd68ZYri7BD9loz0ZbBcGM6M3wN4~w0m0F94tqfrdRrNTHBghO9ZkaReM1tJBz-W~glqyRiMaIFNX6IE7U3H5jaJNU~58Q37sM0SWx-bnpCl9wSCLG45cEbT9U-IAJXHdYbFUE5JNU0CjgqO2PhhAd6VeZHob5cG2FRogeAF5zCLAKGhyPgrRJ-RhMJ3QWFuDIWjYaUUF531ZfdXlIfRjCWBcTH01rJzAFGoCAH5BIRLekyvjTqPcKL0J0BwOXtf4elj0apUokC9VmxIZU58CeLRayjvs0wY~NH~x98-MHQvzaRljOiw__',
    description: 'დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა',
  },
  {
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c051/1868/4e3e239294cad45b2c93c031270a47f0?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G7Aeq2dyYTka0cPlQ7WekIaqCtbq54Nzxnqd68ZYri7BD9loz0ZbBcGM6M3wN4~w0m0F94tqfrdRrNTHBghO9ZkaReM1tJBz-W~glqyRiMaIFNX6IE7U3H5jaJNU~58Q37sM0SWx-bnpCl9wSCLG45cEbT9U-IAJXHdYbFUE5JNU0CjgqO2PhhAd6VeZHob5cG2FRogeAF5zCLAKGhyPgrRJ-RhMJ3QWFuDIWjYaUUF531ZfdXlIfRjCWBcTH01rJzAFGoCAH5BIRLekyvjTqPcKL0J0BwOXtf4elj0apUokC9VmxIZU58CeLRayjvs0wY~NH~x98-MHQvzaRljOiw__',
    description: 'დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა',
  },
] as IPopularNews[];

export const knownFactsMock = [
  {
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/24b0/6366/2a63eb933a283ca80f4847a0a25fcbf1?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lF~J7GW03pUHq5Z0oSoNqOaKyOW-RNdcVV157IFA0H7ea2Ln3i93GarKUZpdKZKkvqeYpH16h3V5q9X8kaONWuWAMSe7OJAhOeTZDi95~J~T1xObMpBpbFJZcvUbJ0VDPajVQk3XyKFT83I1JCBPKD0BVUXbJ24JKscpyg~Xeyizipa4igirvEULaeFqUYEk75EpB8fg-2oG9dHkVKOR15FZomPVwctOVRZn5sQVa1edqlP27km-raP65bj71VBOMlGkJLyCOVDx0-dy56pRwEmDMr8W~RJfxbO3waJ6tQQfTGG7xuNod7Y4bSOziVHcoNWN0qJZP~IThaVy4d3xKQ__',
    description: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების',
  },
  {
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/24b0/6366/2a63eb933a283ca80f4847a0a25fcbf1?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lF~J7GW03pUHq5Z0oSoNqOaKyOW-RNdcVV157IFA0H7ea2Ln3i93GarKUZpdKZKkvqeYpH16h3V5q9X8kaONWuWAMSe7OJAhOeTZDi95~J~T1xObMpBpbFJZcvUbJ0VDPajVQk3XyKFT83I1JCBPKD0BVUXbJ24JKscpyg~Xeyizipa4igirvEULaeFqUYEk75EpB8fg-2oG9dHkVKOR15FZomPVwctOVRZn5sQVa1edqlP27km-raP65bj71VBOMlGkJLyCOVDx0-dy56pRwEmDMr8W~RJfxbO3waJ6tQQfTGG7xuNod7Y4bSOziVHcoNWN0qJZP~IThaVy4d3xKQ__',
    description: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების',
  },
  {
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/24b0/6366/2a63eb933a283ca80f4847a0a25fcbf1?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lF~J7GW03pUHq5Z0oSoNqOaKyOW-RNdcVV157IFA0H7ea2Ln3i93GarKUZpdKZKkvqeYpH16h3V5q9X8kaONWuWAMSe7OJAhOeTZDi95~J~T1xObMpBpbFJZcvUbJ0VDPajVQk3XyKFT83I1JCBPKD0BVUXbJ24JKscpyg~Xeyizipa4igirvEULaeFqUYEk75EpB8fg-2oG9dHkVKOR15FZomPVwctOVRZn5sQVa1edqlP27km-raP65bj71VBOMlGkJLyCOVDx0-dy56pRwEmDMr8W~RJfxbO3waJ6tQQfTGG7xuNod7Y4bSOziVHcoNWN0qJZP~IThaVy4d3xKQ__',
    description: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების',
  },
  {
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/24b0/6366/2a63eb933a283ca80f4847a0a25fcbf1?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lF~J7GW03pUHq5Z0oSoNqOaKyOW-RNdcVV157IFA0H7ea2Ln3i93GarKUZpdKZKkvqeYpH16h3V5q9X8kaONWuWAMSe7OJAhOeTZDi95~J~T1xObMpBpbFJZcvUbJ0VDPajVQk3XyKFT83I1JCBPKD0BVUXbJ24JKscpyg~Xeyizipa4igirvEULaeFqUYEk75EpB8fg-2oG9dHkVKOR15FZomPVwctOVRZn5sQVa1edqlP27km-raP65bj71VBOMlGkJLyCOVDx0-dy56pRwEmDMr8W~RJfxbO3waJ6tQQfTGG7xuNod7Y4bSOziVHcoNWN0qJZP~IThaVy4d3xKQ__',
    description: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების',
  },
  {
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/24b0/6366/2a63eb933a283ca80f4847a0a25fcbf1?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lF~J7GW03pUHq5Z0oSoNqOaKyOW-RNdcVV157IFA0H7ea2Ln3i93GarKUZpdKZKkvqeYpH16h3V5q9X8kaONWuWAMSe7OJAhOeTZDi95~J~T1xObMpBpbFJZcvUbJ0VDPajVQk3XyKFT83I1JCBPKD0BVUXbJ24JKscpyg~Xeyizipa4igirvEULaeFqUYEk75EpB8fg-2oG9dHkVKOR15FZomPVwctOVRZn5sQVa1edqlP27km-raP65bj71VBOMlGkJLyCOVDx0-dy56pRwEmDMr8W~RJfxbO3waJ6tQQfTGG7xuNod7Y4bSOziVHcoNWN0qJZP~IThaVy4d3xKQ__',
    description: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების',
  },
  {
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/24b0/6366/2a63eb933a283ca80f4847a0a25fcbf1?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lF~J7GW03pUHq5Z0oSoNqOaKyOW-RNdcVV157IFA0H7ea2Ln3i93GarKUZpdKZKkvqeYpH16h3V5q9X8kaONWuWAMSe7OJAhOeTZDi95~J~T1xObMpBpbFJZcvUbJ0VDPajVQk3XyKFT83I1JCBPKD0BVUXbJ24JKscpyg~Xeyizipa4igirvEULaeFqUYEk75EpB8fg-2oG9dHkVKOR15FZomPVwctOVRZn5sQVa1edqlP27km-raP65bj71VBOMlGkJLyCOVDx0-dy56pRwEmDMr8W~RJfxbO3waJ6tQQfTGG7xuNod7Y4bSOziVHcoNWN0qJZP~IThaVy4d3xKQ__',
    description: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების',
  },
] as IKnownFacts[];

export const otherNewsMock = [
  {
    date: '12.08.2023',
    category: 'პოლიტიკა',
    height: 'big',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/947f/7952/3cb8d71618679576f1977bdc0c833895?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JysBpMFgKHSYzf1ZYlww1P7~3Y4BKZWiBkVIXZv1oaV4cez2aRIP-7MVLCmdGUgkxZSDe7QAT5eaofssQBTmMxQha5WPfHSWcXmfBAY3gWAbwDmIVgS8agR-UPWYlKGUTCwnSqqVWTya-t4u4LXj~br5-IUgSX0f9b48N1M5X6K37ir~UCVswBDrlXM3HVtM2PQ3eNcP3Iz84HV5eCVA0h1E8b~rrhRKEKNw0GJSp0Epmi~T8zLj0nwJ73-fs2O76ydrkCPrKrijWyDK4TXLjST~wbM~awMFSndSiD4SdxhgqStxP43fEU8hlOdWEB9siNx4-y6zWMYtonea7nbPhg__',
    description: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე',
  },
  {
    date: '12.08.2023',
    category: 'პოლიტიკა',
    height: 'small',

    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c19d/09bc/537d8db640054235eea12e4b9ec8ace4?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jNIsSgfcqo1oUQ4DgZIq95dKnP7atfGq7JMXFQpY2ZKo4luSRKm30sfz1fUX6a4irE04gf2BqedYawVPmAG4GYzpwuw8ycWSE-er1eE4FzyTrz4hdhbHFmrhux4Pohga1cyc2HXgchen6BjTx7eyHA~I2yOwCmfPGVSZ6QrE6LUWFMFCaHg9-sQvCfYn0I9HHi8VvBEC0qfMwd8yA10YYamzZjZ0J0LyFY6mxq5aTCNpc8W8qUvhdH0tcKtgK8REn8SjgN0ihYnjmskjaA9Ru648W653-YeDK3KfkbasxvtyXb1NSDdYNPbCVnXhJuU3~hY20kpUxw7DwcZJouojtQ__',
    description: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე',
  },
  {
    date: '12.08.2023',
    category: 'პოლიტიკა',
    height: 'small',

    imageUrl:
      'https://s3-alpha-sig.figma.com/img/24b0/6366/2a63eb933a283ca80f4847a0a25fcbf1?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lF~J7GW03pUHq5Z0oSoNqOaKyOW-RNdcVV157IFA0H7ea2Ln3i93GarKUZpdKZKkvqeYpH16h3V5q9X8kaONWuWAMSe7OJAhOeTZDi95~J~T1xObMpBpbFJZcvUbJ0VDPajVQk3XyKFT83I1JCBPKD0BVUXbJ24JKscpyg~Xeyizipa4igirvEULaeFqUYEk75EpB8fg-2oG9dHkVKOR15FZomPVwctOVRZn5sQVa1edqlP27km-raP65bj71VBOMlGkJLyCOVDx0-dy56pRwEmDMr8W~RJfxbO3waJ6tQQfTGG7xuNod7Y4bSOziVHcoNWN0qJZP~IThaVy4d3xKQ__',
    description: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე',
  },
  {
    date: '12.08.2023',
    category: 'პოლიტიკა',
    height: 'small',

    imageUrl:
      'https://s3-alpha-sig.figma.com/img/e32c/fa19/946a054f17377c691215632e51b73e1a?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M0nyPca~UakOuLAN2s90aSlDbRsmT-PyyDNm2Nc5OFk7IlEeF81RqyIyPNZ7d33A~5HC~-w-O9GsTiJU5ACqz3I7FUtxreS8kbmtuiG7qGD7BOF3o8gdq1WGuA7pfR37gLMrhtqlT5sjC9KjoYSCKMHyc9r-ONgDYD7b0bQWYgWztKL3eq5uckAuBuExyx-rbHDjxIIwl4cECQa5eBVjrCOD2jq2xUSpOrvuFDUNCwu6uA1~DgnJvl4WVsTxEVOKKixMnEAQBWdTTM4tgozFF2d42joq~~t1pGWsGDb7XhGMgei3QcADUTqFA8~XE7k-QBP6CJdRT8pGe03PEFf6Pg__',
    description: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე',
  },
  {
    date: '12.08.2023',
    category: 'პოლიტიკა',
    height: 'small',

    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c19d/09bc/537d8db640054235eea12e4b9ec8ace4?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jNIsSgfcqo1oUQ4DgZIq95dKnP7atfGq7JMXFQpY2ZKo4luSRKm30sfz1fUX6a4irE04gf2BqedYawVPmAG4GYzpwuw8ycWSE-er1eE4FzyTrz4hdhbHFmrhux4Pohga1cyc2HXgchen6BjTx7eyHA~I2yOwCmfPGVSZ6QrE6LUWFMFCaHg9-sQvCfYn0I9HHi8VvBEC0qfMwd8yA10YYamzZjZ0J0LyFY6mxq5aTCNpc8W8qUvhdH0tcKtgK8REn8SjgN0ihYnjmskjaA9Ru648W653-YeDK3KfkbasxvtyXb1NSDdYNPbCVnXhJuU3~hY20kpUxw7DwcZJouojtQ__',
    description: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე',
  },
] as IOtherNews[];
