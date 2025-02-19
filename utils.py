def calculate_bmi(weight, height):
    """Calculate BMI using weight in kg and height in cm."""
    height_m = height / 100
    return weight / (height_m * height_m)

def get_bmi_category(bmi):
    """Return BMI category based on BMI value."""
    if bmi < 18.5:
        return "Underweight"
    elif bmi < 25:
        return "Normal Weight"
    elif bmi < 30:
        return "Overweight"
    else:
        return "Obese"

def get_bmi_color(category):
    """Return color code based on BMI category."""
    colors = {
        "Underweight": "#FFA500",  # Orange
        "Normal Weight": "#4CAF50",  # Green
        "Overweight": "#FFA500",  # Orange
        "Obese": "#FF0000"  # Red
    }
    return colors.get(category, "#000000")

def calculate_calories(weight, height, age, gender, activity, goal):
    """Calculate daily calorie needs."""
    # Activity level multipliers
    activity_multipliers = {
        "Sedentary": 1.2,
        "Light": 1.375,
        "Moderate": 1.55,
        "Active": 1.725,
        "Very Active": 1.9
    }
    
    # Calculate BMR using Mifflin-St Jeor Equation
    if gender == "Male":
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5
    else:
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161
    
    # Calculate TDEE (Total Daily Energy Expenditure)
    tdee = bmr * activity_multipliers[activity]
    
    # Adjust based on goal
    if goal == "Weight Loss":
        return tdee * 0.8  # 20% deficit
    elif goal == "Weight Gain":
        return tdee * 1.2  # 20% surplus
    else:
        return tdee  # Maintenance

def calculate_macros(calories, goal):
    """Calculate macro distributions based on goals."""
    if goal == "Weight Loss":
        protein_pct = 0.40  # Higher protein for muscle preservation
        fat_pct = 0.35
        carbs_pct = 0.25
    elif goal == "Weight Gain":
        protein_pct = 0.30
        fat_pct = 0.25
        carbs_pct = 0.45  # Higher carbs for energy
    else:  # Maintenance
        protein_pct = 0.30
        fat_pct = 0.30
        carbs_pct = 0.40
    
    # Calculate grams of each macro
    protein_cals = calories * protein_pct
    fat_cals = calories * fat_pct
    carb_cals = calories * carbs_pct
    
    return {
        "protein": int(protein_cals / 4),  # 4 calories per gram of protein
        "fats": int(fat_cals / 9),        # 9 calories per gram of fat
        "carbs": int(carb_cals / 4)       # 4 calories per gram of carbs
    }
