import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const SelectTag = ({ arr, category }) => {
  return (
    <Select>
      <SelectTrigger className={"w-full"}>
        <SelectValue placeholder={`Select a ${category}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {arr.map((item, index) => (
            <SelectItem key={index} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
