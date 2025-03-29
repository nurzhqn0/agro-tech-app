export default defineAppConfig({
  ui: {
    primary: "green",
    gray: "slate",
    button: {
      font: "font-normal",
      rounded: "rounded-xl",
      color: {
        white: {
          solid: "ring-0",
          ghost: "hover:opacity-90 hover:bg-gray-50 ",
        },
        gray: {
          solid: "ring-0",
          ghost:
            "ring-0 hover:opacity-90 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-900",
        },

        red: {
          solid:
            "ring-0 text-white dark:text-white bg-red-500 hover:bg-red-600 dark:bg-red-500 dark:hover:bg-red-600",
          ghost:
            "ring-0 text-red-500 dark:text-red-500 hover:text-red-600 dark:hover:text-red-600 hover:bg-red-50 dark:hover:bg-gray-700",
        },
      },
    },
    badge: {
      rounded: "rounded-2xl",
      base: "cursor-pointer hover:opacity-85",
    },
    notifications: {
      // Show toasts at the top right of the screen
      position: "top-0 right-0 !bottom-[unset] !left-[unset] z-[3000]",
    },
    modal: {
      overlay: {
        background: "bg-black/75",
      },
    },
    slideover: {
      overlay: {
        background: "bg-black/75",
      },
    },
    icon: {
      dynamic: true,
    },
    formGroup: {
      label: {
        base: "!text-gray-400",
        required: "after:content-['']",
      },
      size: {
        lg: "text-base",
      },
    },
    input: {
      rounded: "rounded-2xl",
      size: {
        lg: "text-base",
      },
      color: {
        gray: {
          outline:
            "shadow-sm bg-gray-900 dark:bg-gray-900 text-gray-100 dark:text-white ring-1 ring-inset ring-gray-500 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400",
        },
      },
    },
    textarea: {
      rounded: "rounded-lg",
      size: {
        lg: "text-base",
      },
    },
    select: {},
    selectMenu: {
      default: {
        size: "lg",
        empty: {
          label: "Нет вариантов",
        },
      },
      size: {},
    },
    table: {
      default: {
        loadingState: {
          icon: "i-heroicons-arrow-path-20-solid",
          label: "Загрузка...",
        },
        emptyState: {
          icon: "i-heroicons-circle-stack-20-solid",
          label: "Данных нет.",
        },
      },
    },
  },
});
