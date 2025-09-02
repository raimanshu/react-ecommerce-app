import React from 'react';

const AppButton = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    fullWidth = false,
    disabled = false,
    loading = false,
    leftIcon,
    rightIcon,
    ...props
}) => {
    const baseStyles = `inline-flex items-center justify-center font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2`;

    const sizeStyles = {
        sm: 'text-sm px-3 py-1.5',
        md: 'text-base px-4 py-2',
        lg: 'text-lg px-6 py-3',
    };

    const variantStyles = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
        outline: 'border border-gray-400 text-gray-700 hover:bg-gray-100 focus:ring-gray-400',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
        ghost: 'text-gray-700 hover:bg-gray-100',
    };

    const computedClass = [
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        fullWidth ? 'w-full' : '',
        (disabled || loading) ? 'opacity-50 cursor-not-allowed' : '',
        className, // allow user-defined overrides
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button className={computedClass} disabled={disabled || loading} {...props}>
            {loading ? (
                <span className="animate-spin mr-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
            ) : leftIcon ? (
                <span className="mr-2">{leftIcon}</span>
            ) : null}

            <span>{children}</span>

            {rightIcon && !loading && <span className="ml-2">{rightIcon}</span>}
        </button>
    );
};

export default AppButton;
