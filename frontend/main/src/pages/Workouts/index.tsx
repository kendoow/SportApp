import React, { useState } from 'react';

import SearchWithClear from '@entities/SearchWithClear/ui/SearchWithClear';
import WorkoutCard from '@entities/Workout/ui/WorkoutCard/WorkoutCard';
import WorkoutFilters from '@entities/Workout/ui/WorkoutFilters/WorkoutFilters';





const Workouts = () => {
  const [isEditable, setIsEditable] = useState(false);
  const onDeleteMode = () => {
    setIsEditable(!isEditable);
  };
  return (
    <div>
      <SearchWithClear onDelete={onDeleteMode} />
      <WorkoutFilters />
      <WorkoutCard
        isEditable={isEditable}
        title="123"
        date="123"
      />
    </div>
  );
};

export default Workouts;